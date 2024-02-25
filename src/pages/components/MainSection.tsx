// Navbar.js

import React from 'react'
import Link from 'next/link'

interface MainSectionProps {
  jsonData: any
}

const MainSection: React.FC<MainSectionProps> = ({ jsonData }) => {
  return (
    <div className="main-section">
      <div className="heading-container">
        <Link className="heading-single-box" href="/detail">
          <img
            className="img-fill"
            onClick={() => console.log('hey')}
            src={jsonData[0].pageData.photo.cover}
          />

          <div className="img-data">
            <span className="img-data-category">{jsonData[0].category}</span>
            <h3 className="img-data-heading">{jsonData[0].pageData.title}</h3>
          </div>
        </Link>

        <div className="heading-double-box">
          <div className="first-box">
            <img className="img-fill" src={jsonData[1].pageData.photo.cover} />

            <div className="img-data">
              <span className="img-data-category">{jsonData[1].category}</span>
              <h3 className="img-data-heading">{jsonData[1].pageData.title}</h3>
            </div>
          </div>
          <div className="second-box">
            <img className="img-fill" src={jsonData[2].pageData.photo.cover} />

            <div className="img-data">
              <span className="img-data-category">{jsonData[2].category}</span>
              <h3 className="img-data-heading">{jsonData[2].pageData.title}</h3>
            </div>
          </div>
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
              <div className="hot-topic-heading-container">
                <h3 className="img-data-heading">
                  {jsonData[3].pageData.title}
                </h3>
                <h3 className="img-data-date">
                  {jsonData[3].publish.slice(0, 10)}
                </h3>
              </div>
              <div className="hot-topic-heading-container">
                <h3 className="img-data-heading">
                  {jsonData[4].pageData.title}
                </h3>
                <h3 className="img-data-date">
                  {jsonData[4].publish.slice(0, 10)}
                </h3>
              </div>
              <div className="hot-topic-heading-container">
                <h3 className="img-data-heading">
                  {jsonData[5].pageData.title}
                </h3>
                <h3 className="img-data-date">
                  {jsonData[5].publish.slice(0, 10)}
                </h3>
              </div>
              <div className="hot-topic-heading-container">
                <h3 className="img-data-heading">
                  {jsonData[6].pageData.title}
                </h3>
                <h3 className="img-data-date">
                  {jsonData[6].publish.slice(0, 10)}
                </h3>
              </div>
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
            <div className="custom-category-bottom">
              <img
                className="img-xsmall"
                src={jsonData[2].pageData.photo.cover}
              />

              <h3 className="img-data-heading small-text">
                {jsonData[2].pageData.title}
              </h3>
            </div>
            <div className="custom-category-bottom">
              <img
                className="img-xsmall"
                src={jsonData[6].pageData.photo.cover}
              />

              <h3 className="img-data-heading small-text">
                {jsonData[6].pageData.title}
              </h3>
            </div>
            <div className="custom-category-bottom">
              <img
                className="img-xsmall"
                src={jsonData[3].pageData.photo.cover}
              />

              <h3 className="img-data-heading small-text">
                {jsonData[3].pageData.title}
              </h3>
            </div>
          </div>
        </div>
        <div className="vertical">
          <div className="sub-heading">
            <h6>Fashion</h6>
            <hr />
          </div>
          <div className="vertical-data">
            <div className="custom-category-bottom">
              <img
                className="img-xsmall"
                src={jsonData[2].pageData.photo.cover}
              />

              <h3 className="img-data-heading small-text">
                {jsonData[2].pageData.title}
              </h3>
            </div>
            <div className="custom-category-bottom">
              <img
                className="img-xsmall"
                src={jsonData[6].pageData.photo.cover}
              />

              <h3 className="img-data-heading small-text">
                {jsonData[6].pageData.title}
              </h3>
            </div>
            <div className="custom-category-bottom">
              <img
                className="img-xsmall"
                src={jsonData[3].pageData.photo.cover}
              />

              <h3 className="img-data-heading small-text">
                {jsonData[3].pageData.title}
              </h3>
            </div>
          </div>
        </div>
        <div className="vertical">
          <div className="sub-heading">
            <h6>Tech</h6>
            <hr />
          </div>
          <div className="vertical-data">
            <div className="custom-category-bottom">
              <img
                className="img-xsmall"
                src={jsonData[2].pageData.photo.cover}
              />

              <h3 className="img-data-heading small-text">
                {jsonData[2].pageData.title}
              </h3>
            </div>
            <div className="custom-category-bottom">
              <img
                className="img-xsmall"
                src={jsonData[6].pageData.photo.cover}
              />

              <h3 className="img-data-heading small-text">
                {jsonData[6].pageData.title}
              </h3>
            </div>
            <div className="custom-category-bottom">
              <img
                className="img-xsmall"
                src={jsonData[3].pageData.photo.cover}
              />

              <h3 className="img-data-heading small-text">
                {jsonData[3].pageData.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection
