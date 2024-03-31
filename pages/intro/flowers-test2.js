import { useState } from 'react'
import DefaultLayout from '@/components/layout/default-layout'
import styles from '../custom/custom.module.css'
import Image from 'next/image'
import  variables  from "@/styles/variables.module.scss";
import bannerFlower from '@/assets/banner-flower.jpg'
import { Card, CardBody, CardFooter } from '@nextui-org/react'
//import {Image} from "@nextui-org/react";
export default function Custom() {
  const [activePage, setActivePage] = useState('custom')
  
  return (
    <DefaultLayout activePage={activePage}>
      {
        <>

          {/* main的東西 */}
          <div className={variables.title}>
            霹靂卡霹靂拉拉波波力那貝貝魯多
          </div>
  
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
