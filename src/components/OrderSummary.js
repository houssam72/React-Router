import React from 'react'
import {useNavigate} from 'react-router-dom'

export const OrderSummary = () => {
    const navigate=useNavigate()
  return (
    <>
    <div>OrderSummary confirmes.</div>
    <button onClick={()=>navigate(-1)}>Go back</button>
    </>
  )
}
