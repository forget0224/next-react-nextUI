import { Card } from '@nextui-org/react'
import Image from 'next/image'
import flower from '@/assets/flower.jpeg'
import { Input, Button } from '@nextui-org/react'
import { Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import DefaultLayout from '@/components/layout/default-layout'
// Login page
export default function Login() {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible((prev) => !prev)
  const routeName = 'login'
  return (
    <DefaultLayout activePage={routeName}>
      <div className="py-16 flex justify-center items-center">
        <Card className="flex flex-row  max-w-[950px] w-[950px] max-h-[600px] h-[600px] shadow-lg">
          {/* Form */}
          <div className="w-1/2 h-full flex flex-col items-center px-10 py-12">
            <h1 className="text-3xl mb-12 mt-14">會員登入</h1>
            <form className="flex flex-col space-y-12 w-full">
              <Input
                startContent={<Mail className="text-default-400" />}
                labelPlacement="outside"
                placeholder="請輸入您的電郵"
                type="email"
                label="電子郵件"
                isRequired
              />
              <Input
                startContent={<LockKeyhole className="text-default-400" />}
                labelPlacement="outside"
                type={isVisible ? 'text' : 'password'}
                label="密碼"
                placeholder="請輸入密碼"
                isRequired
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <Eye className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
              />
              <Button className="bg-primary-100 text-white" type="submit">
                登入
              </Button>
            </form>
            <p className="mt-8 text-tertiary-gray-100">
              尚未成為會員嗎？
              <Link
                href="/member/signup"
                className="text-primary hover:underline underline-offset-4"
              >
                會員註冊
              </Link>
            </p>
          </div>
          {/* Banner Image */}
          <div className="w-1/2 h-full">
            <Image
              src={flower}
              alt="flower"
              className="object-center size-full"
            />
          </div>
        </Card>
      </div>
    </DefaultLayout>
  )
}