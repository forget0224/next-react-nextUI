// 這是原本遊戲 index.html的head

//TODO:
{
  /* <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./css/index.css" />
  <title>發牌、選牌與翻牌動態</title> */
}

import { useState } from 'react'
import DefaultLayout from '@/components/layout/default-layout'
import styles from '../custom/custom.module.css'
import Image from 'next/image'
import bannerFlower from '@/assets/banner-flower.jpg'
export default function Custom() {
  const [activePage, setActivePage] = useState('custom')
  return (
    <DefaultLayout activePage={activePage}>
      {
        <>
          {/* main的東西 */}
          <div className="w-screen h-screen bg-orange-100 text-2xl text-black">
            代客送花 建立custom branch
          </div>
          {/* 遊戲 index.html */}
          <div className="game">
            <div className="tip">click and start</div>
            <div className="card card1">
              <div className="content">
                <div className="front" />
                <div className="back" />
              </div>
            </div>
            <div className="card card2">
              <div className="content">
                <div className="front" />
                <div className="back" />
              </div>
            </div>
            <div className="card card3">
              <div className="content">
                <div className="front" />
                <div className="back" />
              </div>
            </div>
            <div className="card card4">
              <div className="content">
                <div className="front" />
                <div className="back" />
              </div>
            </div>
            <div className="card card5">
              <div className="content">
                <div className="front" />
                <div className="back" />
              </div>
            </div>
            <div className="card card6">
              <div className="content">
                <div className="front" />
                <div className="back" />
              </div>
            </div>
            <div className="card card7">
              <div className="content">
                <div className="front" />
                <div className="back" />
              </div>
            </div>
            <div className="card card8">
              <div className="content">
                <div className="front" />
                <div className="back" />
              </div>
            </div>
            <div className="card card9">
              <div className="content">
                <div className="front" />
                <div className="back" />
              </div>
            </div>
            <div className="card card10">
              <div className="content">
                <div className="front" />
                <div className="back" />
              </div>
            </div>
          </div>

          <div></div>

          <div className={styles['foo']}>代客送花 建立custom branch</div>
          <div className="w-screen h-screen bg-blue-100  text-black flex flex-col  justify-center items-center">
            <div className="border-1 border-pink w-[1000px] h-[400px] flex flex-row">
              <div className="w-full flex flex-col bg-white justify-center items-center text-center">
                <h1 className="text-2xl my-3">情人節活動</h1>
                <p className="my-3 px-4">
                  無論風雨，無論時節，花店都在為您提供最溫馨的服務。無論風雨，無論時節，花店都在為您提供最溫馨的服務。無論風雨，無論時節，花店都在為您提供最溫馨的服務。
                </p>
                <div className="w-full text-right px-4 my-3">
                  <a href="#" className="text-black ">
                    More
                  </a>
                </div>
              </div>
              <div className="w-full">
                <Image src={bannerFlower} alt="" className="w-[500px] h-full" />
              </div>
            </div>
          </div>
        </>
      }
    </DefaultLayout>
  )
}
