import React from "react";
import flatPng from "../../styles/flat.png";
import housePng from "../../styles/house.png";
import mapPng from "../../styles/map.png";
import commercePng from "../../styles/commerce.png";
import rentPng from "../../styles/rent.png";
import "./sections.css";

const Sections = () => {
  return (
    <section className="sections">
      <div className="sections_container">
        <div className="sections_list">
          <div className="list_item">
            <img src={flatPng} alt="flat" />
            <a className="list_item__link" href="/#">
              Квартиры
            </a>
          </div>
          <div className="list_item">
            <img src={housePng} alt="house" />
            <a className="list_item__link" href="/#">
              Дома
            </a>
          </div>
          <div className="list_item">
            <img src={mapPng} alt="map" />
            <a className="list_item__link" href="/#">
              Участки
            </a>
          </div>
          <div className="list_item">
            <img src={commercePng} alt="commerce" />
            <a className="list_item__link" href="/#">
              Коммерция
            </a>
          </div>
          <div className="list_item">
            <img src={rentPng} alt="rent" />
            <a className="list_item__link" href="/#">
              Аренда
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sections;
