// Page.js
'use client'
import React, { useEffect, useState } from 'react'
import jsonData from '../../public/oyebusy-dummy-data.json'
import Header from '../pages/components/Header'
import MainSection from '../pages/components/MainSection'
import Footer from '../pages/components/Footer'

const Page = () => {

  useEffect(() => {
    jsonData.sort((a, b) => Math.random() - 0.5);
    console.log(jsonData)
  }, [])

  return (
    <div className="home">
      <Header jsonData={jsonData} />
      <MainSection jsonData={jsonData} />
      <Footer />
    </div>
  )
}

export default Page
