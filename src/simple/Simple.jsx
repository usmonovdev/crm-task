import React, { useEffect } from 'react'
import { SimpleNavbar, SimpleUsers} from './index'
import { Router, Routes, useNavigate } from 'react-router-dom'

const Simple = () => {
  const navigate = useNavigate()
  // useEffect(() => {
  //   if (!localStorage.getItem("IS_SIMPLE")) {
  //     navigate("/login")
  //   }
  // }, [])
  return (
    <div>
      simple main
    </div>
  )
}

export default Simple