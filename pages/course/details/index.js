import React, { useState } from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/react'
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from '@nextui-org/react'
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react'
import { BsChevronRight } from 'react-icons/bs'
import { FaStar, FaShareAlt } from 'react-icons/fa'
// 小組元件
import DefaultLayout from '@/components/layout/default-layout'
import CenterLayout from '@/components/layout/center-layout'
import { MyButton } from '@/components/btn/mybutton'
import Subtitle from '@/components/common/subtitle'
import CardNews from '@/components/course/card-news'
import CardTime from '@/components/course/card-time'
import CoursePagination from '@/components/course/pagination'
import CourseRating from '@/components/course/rating'
import CourseFavorite from '@/components/course/btn-favorite'
import ShareModal from '@/components/common/modal-share'
import CourseMap from '@/components/course/card-map'
import CourseSlider from '@/components/course/banner-silder'
import CourseComment from '@/components/course/comment'
import CourseRatingFilter from '@/components/course/filter-rating'
import CardGroup from '@/components/course/card-group'

export default function CourseDetails() {
  const [activePage, setActivePage] = useState('course')
  // 麵包屑 變數
  const underlines = ['none']

  // 詳細介紹 Modal 變數
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const [size, setSize] = React.useState('4xl') // 預設大小設定為 '4xl'

  // 分享 Modal 變數
  const {
    isOpen: isShareOpen,
    onOpen: onShareOpen,
    onOpenChange: onShareOpenChange,
  } = useDisclosure()

  return (
    <DefaultLayout
      activePage={activePage}
      className="justify-center flex-col items-center"
    >
      <CenterLayout>
        {/* 麵包屑 */}
        <div className="w-full py-6 hidden md:block">
          <Breadcrumbs>
            <BreadcrumbItem href="/">首頁</BreadcrumbItem>
            <BreadcrumbItem>合作課程</BreadcrumbItem>
            <BreadcrumbItem>基礎花藝課程</BreadcrumbItem>
            <BreadcrumbItem color="primary">韓系乾燥花束製作</BreadcrumbItem>
          </Breadcrumbs>
        </div>
        {/* 課程圖和課程資訊 */}
        <div className="flex flex-col gap-6 md:flex-row mb-12 w-full">
          {/* -課程圖 */}
          <div className="w-full md:w-6/12 mb-6 md:mb-0">
            <CourseSlider />
          </div>
          {/* -課程資訊 */}
          <div className="w-full md:w-6/12 flex flex-col gap-6">
            {/* 主要資訊 */}
            <div className="flex flex-col gap-4">
              <div className="">
                <p className="text-3xl">韓系乾燥花束製作</p>
                <div className="flex justify-between mt-2">
                  <CourseRating />
                  <div className="flex flex-row">
                    <button>
                      <CourseFavorite />
                    </button>
                    <button
                      onClick={onShareOpen}
                      className="flex flex-row items-center h-6 w-6 justify-center text-secondary-100 hover:text-[#FFAC9A]"
                    >
                      <FaShareAlt className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="line-clamp-4">
                  歡迎參加我們的韓系乾燥花束製作課程！這堂課將教導您如何選擇適合的花材，以及製作出擁有濃厚韓風風格的精美花束。我們將分享製作過程中的技巧和訣竅，包括花材的層次搭配、包裝技術等，讓您能輕鬆打造出獨一無二的乾燥花藝品。無論您是初學者還是有一定經驗的花藝愛好者，都能在這堂課中獲得滿足感和成就感。透過豐富多彩的花束，帶著層層美好，為生活增添一抹花香。我們將分享製作過程中的技巧和訣竅，包括花材的層次搭配、包裝技術等，讓您能輕鬆打造出獨一無二的乾燥花藝品。
                </div>
                <p
                  className="text-tertiary-gray-100 no-underline hover:underline flex items-center mt-1 cursor-pointer"
                  onClick={onOpen}
                >
                  查看詳細
                  <BsChevronRight />
                </p>
              </div>
              <div className="flex gap-2 hidden md:block">
                <span className="bg-primary-300 px-2">基礎花藝課程</span>
                <span className="bg-primary-300 px-2">熱賣中</span>
                <span className="bg-primary-300 px-2">可使用優惠券</span>
              </div>
            </div>
            {/* 購買卡片 */}
            <Card className="p-4">
              <CardBody className="flex flex-col gap-2">
                <p>
                  課程定價<span className="text-2xl ml-2">NT$1200</span>
                </p>
                <p>
                  課程人數<span className="ml-2">4-12人</span>
                </p>
              </CardBody>
              <CardFooter className="flex gap-4">
                <MyButton
                  color="primary"
                  size="xl"
                  isOutline
                  className="w-full"
                >
                  加入購物車
                </MyButton>
                <MyButton color="primary" size="xl" className="w-full">
                  立即預約
                </MyButton>
              </CardFooter>
            </Card>
          </div>
        </div>
        {/* 其他所有資訊 */}
        <div className="flex flex-col md:flex-row w-full gap-16 static overflow:auto">
          {/* 開課商家資訊 */}
          <div className="w-full md:w-5/12 order-0 md:order-1 h-fit sticky top-0">
            <CourseMap />
          </div>
          {/* 其他詳細資訊 */}
          <div className="flex w-full md:w-7/12 flex-col gap-16">
            {/* 課程最新訊息 */}
            <div className="flex flex-col gap-6">
              <Subtitle text="課程最新訊息" />
              <CardNews />
            </div>
            {/* 上課日期 */}
            <div className="flex flex-col gap-6">
              <Subtitle text="上課日期" />
              <div className="flex flex-col gap-4">
                <CardTime />
                <CardTime />
                <CardTime />
              </div>
            </div>
            {/* 課程評價 */}
            <div className="flex flex-col gap-2 md:gap-6">
              <Subtitle text="課程評價" />
              {/* 總評分 */}
              <div className="flex flex-row gap-2">
                <span className="text-2xl">4.0</span>
                <span className="text-2xl">/</span>
                <span className="text-2xl">5</span>
                <div className="flex flex-row items-center text-secondary-100">
                  <FaStar className="w-5 h-5" />
                  <FaStar className="w-5 h-5" />
                  <FaStar className="w-5 h-5" />
                  <FaStar className="w-5 h-5 text-secondary-200" />
                  <FaStar className="w-5 h-5 text-secondary-200" />
                </div>
              </div>
              {/* filter */}
              <div className="">
                <CourseRatingFilter />
              </div>
              {/* 評價 */}
              <div>
                <CourseComment />
                <CourseComment />
                <CourseComment />
              </div>
              <div>
                <CoursePagination />
              </div>
            </div>
            {/* 推薦課程 */}
            <div className="flex flex-col gap-5 mb-[80px]">
              <Subtitle text="推薦課程" />
              <CardGroup className="overflow-x-auto" />
            </div>
          </div>
        </div>
      </CenterLayout>
      {/* 詳細介紹 Modal */}
      <>
        <Modal
          size="4xl"
          placement={'center'}
          isOpen={isOpen}
          onClose={onClose}
          classNames={{
            base: '',
            backdrop: 'bg-[#262626]/50 backdrop-opacity-40',
            closeButton: 'hover:bg-primary/5 active:bg-primary/10 mr-4 mt-4',
          }}
        >
          <ModalContent className="pb-8">
            <ModalHeader className="px-8 pt-8 text-2xl">詳細介紹</ModalHeader>
            <ModalBody className="px-8 py-0">
              {/* Modal 的內容 */}
              <p>
                歡迎參加我們的韓系乾燥花束製作課程！這堂課將教導您如何選擇適合的花材，以及製作出擁有濃厚韓風風格的精美花束。我們將分享製作過程中的技巧和訣竅，包括花材的層次搭配、包裝技術等，讓您能輕鬆打造出獨一無二的乾燥花藝品。無論您是初學者還是有一定經驗的花藝愛好者，都能在這堂課中獲得滿足感和成就感。透過豐富多彩的花束，帶著層層美好，為生活增添一抹花香。我們將分享製作過程中的技巧和訣竅，包括花材的層次搭配、包裝技術等，讓您能輕鬆打造出獨一無二的乾燥花藝品。
                <br />
                <br />
                歡迎參加我們的韓系乾燥花束製作課程！這堂課將教導您如何選擇適合的花材，以及製作出擁有濃厚韓風風格的精美花束。我們將分享製作過程中的技巧和訣竅，包括花材的層次搭配、包裝技術等，讓您能輕鬆打造出獨一無二的乾燥花藝品。
              </p>
              {/* 更多內容 */}
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
      {/* 分享 Modal */}
      <>
        <ShareModal
          // onOpen={onShareOpen}
          isShareOpen={isShareOpen}
          onShareOpenChange={onShareOpenChange}
        />
      </>
    </DefaultLayout>
  )
}
