'use client'
import React, { useEffect, useState } from 'react'
import jsonData from '../../public/oyebusy-dummy-data.json'
import Header from './Components/Header'
import MainSection from './Components/MainSection'
import Footer from './Components/Footer'

const Page = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    jsonData.sort((a, b) => Math.random() - 0.5)
    console.log(jsonData)
  }, [])

  const handleClick = () => {
    setData(jsonData[0]);
    console.log(jsonData);
  }

  return (
    <div className="home">
      <Header jsonData={jsonData} />
      <MainSection handleClick={handleClick} jsonData={jsonData} />
      <Footer />
    </div>
  )
}

export default Page
