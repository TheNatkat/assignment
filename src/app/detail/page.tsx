"use client";
import React from "react";
import jsonData from "../../../public/oyebusy-dummy-data.json";
import Header from "@/pages/components/Header";
import DetailsFooter from "@/pages/components/DetailsFooter";

const Detail = () => {
  return (
    <>
      <div className="home">
        <Header jsonData={jsonData} />
        <div className="main-page">
          <div className="blog-area">
            <div className="breadcrumbs">
              {jsonData[0].pageData.breadcrumbItems.map(
                (item: any, idx: number) => (
                  <React.Fragment key={idx}>
                    {idx === 0 ? null : <h6>{">"}</h6>}
                    <h6>{item.displayName}</h6>
                  </React.Fragment>
                )
              )}
            </div>
            <img
              className="img-full"
              src={jsonData[0].pageData.photo.thumbnail}
            />
            <span className="img-data-page">{jsonData[0].category}</span>
            <h3 className="img-data-date">
              {jsonData[0].publish.slice(0, 10)}
            </h3>

            {jsonData.slice(1, 3).map((data, index) => (
              <React.Fragment key={index}>
                <h1>{data.pageData.title}</h1>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: data.pageData.content }}
                />
                <img className="img-full" src={data.pageData.photo.cover} />
              </React.Fragment>
            ))}
          </div>
          <div className="recent-post-area">
            <div className="sub-heading">
              <h6>Recent Posts</h6>
              <hr />
            </div>
            {jsonData.slice(3, 9).map((data, index) => (
              <div className="recent-posts-area" key={index}>
                <div className="img-container">
                  <img className="img-recent" src={data.pageData.photo.cover} />
                </div>
                <div className="text-area">
                  <h6 className="recent-category">{data.category}</h6>
                  <h6 className="img-data-heading small-text">
                    {data.pageData.title}
                  </h6>
                  <h6 className="img-data-date">{data.publish.slice(0, 10)}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <DetailsFooter />
    </>
  );
};

export default Detail;
