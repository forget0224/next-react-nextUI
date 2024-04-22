import React, { useEffect, useCallback } from 'react'
import { fabric } from 'fabric'
import { useFlower } from '@/hooks/use-flower'

const WorkingArea = () => {
  const { canvasRef, setupCustomControls, imagesInfo, setImagesInfo } =
    useFlower()

  const updateImagesInfoOnCanvas = useCallback(
    (obj) => {
      if (!canvasRef.current || !canvasRef.current.fabric.clipPath) {
        console.error('Clip path not found.')
        return
      }
      const clipBounds = canvasRef.current.fabric.clipPath.getBoundingRect()
      const centerLeft = clipBounds.left + clipBounds.width / 2
      const centerTop = clipBounds.top + clipBounds.height / 2

      const updatedInfo = {
        id: obj.id,
        name: obj.name,
        url: obj.toDataURL(),
        left: obj.left - centerLeft,
        top: obj.top - centerTop,
        angle: obj.angle,
        zIndex: obj.zIndex,
      }
      // console.log('Object modified:', updatedInfo)
      const foundIndex = imagesInfo.findIndex((info) => info.id === obj.id)
      if (foundIndex !== -1) {
        const newImagesInfo = [...imagesInfo]
        newImagesInfo[foundIndex] = updatedInfo
        setImagesInfo(newImagesInfo)
      } else {
        console.error(
          'No matching ID found in imagesInfo, this should not happen during move.'
        )
      }
    },
    [imagesInfo, setImagesInfo, canvasRef]
  )
  // const defineAndDrawShapes = (canvas, width, height) => {
  //   // const svgPathData =
  //   //   'M21.4028 96.3182L3.00089 84.0454C-5.5 70 10.6848 54.275 33.5009 34.5C51.3336 19.0441 113.722 7.78693 192.171 1.10342C211.913 -0.57848 310.872 18.3129 334.459 53.5016C356.8 86.8311 357.372 115.323 352.501 122C348.604 127.342 340.099 134.5 340.099 134.5C344.97 143.574 347.278 156.941 340.099 160.845C332.921 164.748 313.693 162.471 304.976 160.845L290.363 155.965C284.637 151.514 270.417 141.84 259.342 138.758C248.266 135.676 254.727 143.98 259.342 148.517C249.497 158.995 223.62 161.101 211.913 160.845C211.913 160.845 108.081 155.965 55.782 128.742C55.782 128.742 21.4028 116.096 21.4028 96.3182Z'
  //   const svgPathData =
  //     'M87 181C87 181 24 163.278 24 143.5C24 143.5 25 134.5 20.5 132C16 129.5 11.3577 129.257 5.49972 127.5C-3.00116 113.455 -3.04316 89.4992 44.4472 45.4999C84.9247 7.99786 151.448 1.00168 209.948 1C268.448 0.998316 332.64 17.7561 362.958 60.003C390.947 99.0029 391.5 164 370.5 174C364.53 176.843 373 197 373 197C373 211.5 348 208.967 348 208.967C348 208.967 325.5 189.033 333 208C333 211 327.929 208.967 325 208.967C321 208 318.5 197 308.5 193.5C257.555 175.669 282.385 192.463 287 197C277.155 207.478 238.708 208.257 227 208C227 208 139.299 208.223 87 181Z'

  //   const scale = width < 500 ? 0.95 : 1
  //   const left = width < 500 ? 13 : 67
  //   const top = width < 500 ? 18 : 0

  //   const clipPath = new fabric.Path(svgPathData, {
  //     fill: 'transparent',
  //     stroke: 'transparent',
  //     strokeWidth: 0,
  //     selectable: false,
  //     evented: false,
  //     absolutePositioned: true,
  //     scaleX: scale,
  //     scaleY: scale,
  //     left: left,
  //     top: top,
  //   })

  //   canvas.clipPath = clipPath
  //   const visualPath = new fabric.Path(svgPathData, {
  //     fill: 'rgba(228, 228, 228, 0.50)',
  //     stroke: 'none',
  //     strokeWidth: 1,
  //     selectable: false,
  //     evented: false,
  //     scaleX: scale,
  //     scaleY: scale,
  //     left: left,
  //     top: top,
  //   })

  //   canvas.add(visualPath)

  //   canvas.renderAll()
  // }

  fabric.Object.prototype.shouldDrawControls = function () {
    return this.hasControls && !this.group
  }
  fabric.Object.prototype.drawBorders = function (ctx) {
    const scaleX = this.scaleX,
      scaleY = this.scaleY,
      width = this.width * scaleX,
      height = this.height * scaleY

    ctx.save()

    ctx.strokeStyle = '#FF7C7C'

    ctx.lineWidth = 1 / this.borderScaleFactor
    ctx.setLineDash(this.borderDashArray || [5, 5])

    ctx.translate(this.left, this.top)
    ctx.rotate((this.angle * Math.PI) / 180)

    ctx.strokeRect(-width / 2, -height / 2, width, height)

    ctx.restore()
  }

  useEffect(() => {
    const canvasContainer = canvasRef.current.parentElement
    const setCanvasSize = () => {
      if (canvasContainer) {
        const width = canvasContainer.clientWidth
        const height = canvasContainer.clientHeight

        canvas.setWidth(width)
        canvas.setHeight(height)
        defineAndDrawShapes(canvas, width, height)

        canvas.renderAll()
      }
    }
    let canvas = canvasRef.current?.fabric
    if (!canvas) {
      canvas = new fabric.Canvas(canvasRef.current)

      setCanvasSize()
      setupCustomControls(canvas)

      canvasRef.current.fabric = canvas
    }
    // window.addEventListener('resize', setCanvasSize)
    canvas.on('object:modified', (e) => updateImagesInfoOnCanvas(e.target))
    canvas.on('object:moving', (e) => updateImagesInfoOnCanvas(e.target))

    canvas.on('after:render', function () {
      this.forEachObject((obj) => {
        if (obj.active || this.getActiveObject() === obj) {
          if (obj.hasBorders || obj.hasControls) {
            obj.drawBorders(this.contextContainer)
            obj.drawControls(this.contextContainer)
          }
        }
      })
    })

    return () => {
      canvas.off('object:modified')
      canvas.off('object:moving')
      canvas.off('after:render')
    }
  }, [canvasRef, setupCustomControls, updateImagesInfoOnCanvas])
  const defineAndDrawShapes = (canvas, width, height) => {
    const svgPathData =
      'M87 181C87 181 24 163.278 24 143.5C24 143.5 25 134.5 20.5 132C16 129.5 11.3577 129.257 5.49972 127.5C-3.00116 113.455 -3.04316 89.4992 44.4472 45.4999C84.9247 7.99786 151.448 1.00168 209.948 1C268.448 0.998316 332.64 17.7561 362.958 60.003C390.947 99.0029 391.5 164 370.5 174C364.53 176.843 373 197 373 197C373 211.5 348 208.967 348 208.967C348 208.967 325.5 189.033 333 208C333 211 327.929 208.967 325 208.967C321 208 318.5 197 308.5 193.5C257.555 175.669 282.385 192.463 287 197C277.155 207.478 238.708 208.257 227 208C227 208 139.299 208.223 87 181Z'

    const scale = width < 500 ? 0.87 : 1
    const left = width < 500 ? 22 : 64
    const top = width < 500 ? 53 : 0

    const clipPath = new fabric.Path(svgPathData, {
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 0,
      selectable: false,
      evented: false,
      absolutePositioned: true,
      scaleX: scale,
      scaleY: scale,
      left: left,
      top: top,
    })

    canvas.clipPath = clipPath

    const visualPath = new fabric.Path(svgPathData, {
      fill: 'rgba(228, 228, 228, 0.50)',
      stroke: 'transparent',
      strokeWidth: 1,
      selectable: false,
      evented: false,
      scaleX: scale,
      scaleY: scale,
      left: left,
      top: top,
    })

    canvas.visualPath = visualPath

    canvas.on('selection:created', () => {
      canvas.add(canvas.visualPath)
      canvas.renderAll()
    })

    canvas.on('selection:cleared', () => {
      canvas.remove(canvas.visualPath)
      canvas.renderAll()
    })
  }

  return (
    <>
      <canvas ref={canvasRef} className="sample-canvas" />
    </>
  )
}

export default WorkingArea
