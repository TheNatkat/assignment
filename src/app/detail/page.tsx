'use client'
import React from 'react'
import jsonData from '../../../public/oyebusy-dummy-data.json'
import Header from '@/pages/components/Header'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io'
import { FaLinkedinIn } from 'react-icons/fa6'

const Detail = () => {
  console.log(jsonData[0])
  return (
    <div className="home">
      <Header jsonData={jsonData} />
      <div className="main-page">
        <div className="blog-area">
          <div className="breadcrumbs">
            {jsonData[0].pageData.breadcrumbItems.map(
              (item: any, idx: number) => {
                return idx === 0 ? (
                  <h6 key={idx}>{item.displayName}</h6>
                ) : (
                  <>
                    <h6 key={idx + 100}> {'>'} </h6>
                    <h6 key={idx}>{item.displayName}</h6>
                  </>
                )
              }
            )}
          </div>
          <img
            className="img-full"
            src={jsonData[0].pageData.photo.thumbnail}
          />
          <span className="img-data-page">{jsonData[0].category}</span>

          <h3 className="img-data-date">{jsonData[0].publish.slice(0, 10)}</h3>

          <h1>{jsonData[2].pageData.title} </h1>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: jsonData[1].pageData.content }}
          />

          <img className="img-full" src={jsonData[2].pageData.photo.cover} />

          <h1>{jsonData[2].pageData.title} </h1>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: jsonData[2].pageData.content }}
          />
        </div>
        <div className="recent-post-area">
          <div className="sub-heading">
            <h6>Recent Posts</h6>
            <hr />
          </div>
          <div className="recent-posts-area">
            <div className="img-container">
              <img
                className="img-recent"
                src={jsonData[3].pageData.photo.cover}
              />
            </div>
            <div className="text-area">
              <h6 className="recent-category">{jsonData[3].category}</h6>
              <h6 className="img-data-heading small-text">
                {jsonData[3].pageData.title}
              </h6>
              <h6 className="img-data-date">
                {jsonData[3].publish.slice(0, 10)}
              </h6>
            </div>
          </div>
          <div className="recent-posts-area">
            <div className="img-container">
              <img
                className="img-recent"
                src={jsonData[7].pageData.photo.cover}
              />
            </div>
            <div className="text-area">
              <h6 className="recent-category">{jsonData[7].category}</h6>
              <h6 className="img-data-heading small-text">
                {jsonData[7].pageData.title}
              </h6>
              <h6 className="img-data-date">
                {jsonData[7].publish.slice(0, 10)}
              </h6>
            </div>
          </div>
          
            <div className="img-container">
              <img
                className="img-recent"
                src={jsonData[6].pageData.photo.cover}
              />
            </div>
            <div className="text-area">
              <h6 className="recent-category">{jsonData[6].category}</h6>
              <h6 className="img-data-heading small-text">
                {jsonData[6].pageData.title}
              </h6>
              <h6 className="img-data-date">
                {jsonData[6].publish.slice(0, 10)}
              </h6>
            </div>
         
        </div>
      </div>

      <div className="Footer">
        <div className="footer-navbar">
          <h6 className="page-selected-footer">Home</h6>
          <h6>Fashion</h6>
          <h6>Technology</h6>
          <h6>Life Style</h6>
          <h6>Environment</h6>
        </div>
        <div className="footer-social">
          <FaFacebookF />
          <IoLogoInstagram />
          <FaLinkedinIn />
          <FaTwitter />
        </div>
        <h5 className="copyright">
          Copyright © 2023 Magazine - Powered by Rishi Theme
        </h5>
      </div>
    </div>
  )
}

export default Detail
