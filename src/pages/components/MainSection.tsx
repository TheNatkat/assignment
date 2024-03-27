// Navbar.js

import React from "react";
import Link from "next/link";

interface MainSectionProps {
  jsonData: any;
}

const MainSection: React.FC<MainSectionProps> = ({ jsonData }) => {
  if (
    !jsonData ||
    !jsonData[0] ||
    !jsonData[0].pageData ||
    !jsonData[0].category
  ) {
    return null;
  }

  const renderMainSectionItem = (data: any, index: number) => {
    return (
      <div className="first-box" key={index}>
        <img className="img-fill" src={data.pageData.photo.cover} />
        <div className="img-data">
          <span className="img-data-category">{data.category}</span>
          <h3 className="img-data-heading">{data.pageData.title}</h3>
        </div>
      </div>
    );
  };

  return (
    <div className="main-section">
      <div className="heading-container">
        <Link className="heading-single-box" href="/detail">
          <img
            className="img-fill"
            onClick={() => console.log("hey")}
            src={jsonData[0].pageData.photo.cover}
          />

          <div className="img-data">
            <span className="img-data-category">{jsonData[0].category}</span>
            <h3 className="img-data-heading">{jsonData[0].pageData.title}</h3>
          </div>
        </Link>

        <div className="heading-double-box">
          {jsonData
            .slice(1, 3)
            .map((data: any, index: number) =>
              renderMainSectionItem(data, index + 1)
            )}
        </div>
      </div>

      <div className="mid-heading-container">
        <div className="hot-topic-container">
          <div className="sub-heading">
            <h6>Hot Topic</h6>
            <hr />
          </div>
          <div className="hot-topic-content">
            <div className="hot-topic-img-content">
              <img
                className="img-fill"
                src={jsonData[2].pageData.photo.cover}
              />

              <div className="img-data">
                <span className="img-data-category">
                  {jsonData[2].category}
                </span>
                <h3 className="img-data-heading">
                  {jsonData[2].pageData.title}
                </h3>
              </div>
            </div>
            <div className="hot-topic-just-content">
              {jsonData.slice(3, 7).map((data: any, index: number) => (
                <div className="hot-topic-heading-container" key={index}>
                  <h3 className="img-data-heading">{data.pageData.title}</h3>
                  <h3 className="img-data-date">{data.publish.slice(0, 10)}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="custom-category-container">
          <div className="sub-heading">
            <h6>{jsonData[5].category}</h6>
            <hr />
          </div>
          <div className="custom-category-section">
            <div className="custom-category-img">
              <img
                className="img-fill"
                src={jsonData[2].pageData.photo.cover}
              />

              <div className="img-data">
                <h3 className="img-data-heading">
                  {jsonData[2].pageData.title}
                </h3>
              </div>
            </div>
            <div className="custom-category-bottom">
              <img
                className="img-small"
                src={jsonData[2].pageData.photo.cover}
              />

              <h3 className="img-data-heading">{jsonData[2].pageData.title}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="image-heading-container">
        <div className="sub-heading">
          <h6>Hot Topic</h6>
          <hr />
        </div>
        <div className="image-heading-content">
          <div className="img-container-medium">
            <img className="img-fill" src={jsonData[0].pageData.photo.cover} />
            <div className="img-data">
              <span className="img-data-category">{jsonData[0].category}</span>
              <h3 className="img-heading">{jsonData[0].pageData.title}</h3>
            </div>
          </div>
          <div className="img-container-medium">
            <img className="img-fill" src={jsonData[8].pageData.photo.cover} />
            <div className="img-data">
              <span className="img-data-category">{jsonData[8].category}</span>
              <h3 className="img-heading">{jsonData[8].pageData.title}</h3>
            </div>
          </div>
          <div className="img-container-medium">
            <img className="img-fill" src={jsonData[11].pageData.photo.cover} />
            <div className="img-data">
              <span className="img-data-category">{jsonData[11].category}</span>
              <h3 className="img-heading">{jsonData[11].pageData.title}</h3>
            </div>
          </div>
          <div className="img-container-medium">
            <img className="img-fill" src={jsonData[4].pageData.photo.cover} />
            <div className="img-data">
              <span className="img-data-category">{jsonData[4].category}</span>
              <h3 className="img-heading">{jsonData[4].pageData.title}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="vertical-container-section">
        <div className="vertical">
          <div className="sub-heading">
            <h6>Hot Topic</h6>
            <hr />
          </div>
          <div className="vertical-data">
            {jsonData.slice(2, 5).map((data: any, index: number) => (
              <div className="custom-category-bottom" key={index}>
                <img className="img-xsmall" src={data.pageData.photo.cover} />
                <h3 className="img-data-heading small-text">
                  {data.pageData.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="vertical">
          <div className="sub-heading">
            <h6>Fashion</h6>
            <hr />
          </div>
          <div className="vertical-data">
            {jsonData.slice(2, 5).map((data: any, index: number) => (
              <div className="custom-category-bottom" key={index}>
                <img className="img-xsmall" src={data.pageData.photo.cover} />
                <h3 className="img-data-heading small-text">
                  {data.pageData.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="vertical">
          <div className="sub-heading">
            <h6>Tech</h6>
            <hr />
          </div>
          <div className="vertical-data">
            {jsonData.slice(2, 5).map((data: any, index: number) => (
              <div className="custom-category-bottom" key={index}>
                <img className="img-xsmall" src={data.pageData.photo.cover} />
                <h3 className="img-data-heading small-text">
                  {data.pageData.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
