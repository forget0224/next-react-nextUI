import React, { createContext, useState, useContext } from 'react'
import useLocalStorage from '../hooks/use-localStorage'
const FillOutContext = createContext()

export const FillOutProvider = ({ children }) => {
  const [fillOutDetails, setFillOutDetails] = useLocalStorage(
    'fillOutDetails',
    {
      recipientName: '', // 收件人姓名
      contactNumber: '', // 聯絡電話
      deliveryOption: '', // 運送選項
      couponCode: '', // 優惠券代碼
      paymentMethod: '', // 付款方式
      invoiceOption: '', // 發票
    }
  )
  console.log(fillOutDetails)

  // 提供整個表單數據和更新函數給下面的組件
  return (
    <FillOutContext.Provider value={{ fillOutDetails, setFillOutDetails }}>
      {children}
    </FillOutContext.Provider>
  )
}

// 自定義hook以方便使用Context
export const useFillOut = () => useContext(FillOutContext)
