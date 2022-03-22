import React from "react";
import logoPng from "../../styles/logo.png";
import blueHousePng from "../../styles/blueHouse.png";
import heartPng from "../../styles/heart.png";
import altPng from "../../styles/alt.png";
import chatPng from "../../styles/chat.png";
import pdbPng from "../../styles/pdb.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="mobile_nav">
          <div className="mobile_nav__item">
            <img id="first_img_item" src={blueHousePng} alt="home" />
            <a href="/#">Объявления</a>
          </div>
          <div className="mobile_nav__item">
            <img src={heartPng} alt="heartPng" />
            <a href="/#">Избранные</a>
          </div>
          <div className="mobile_nav__item">
            <img src={altPng} alt="altPng" />
            <a href="/#">Создать</a>
          </div>
          <div className="mobile_nav__item">
            <img src={chatPng} alt="chatPng" />
            <a href="/#">Подборки</a>
          </div>
          <div className="mobile_nav__item">
            <img src={pdbPng} alt="pdbPng" />
            <a href="/#">Чаты</a>
          </div>
        </div>
        <img src={logoPng} alt="logo" className="logo_footer" />
        <div className="footer_info">
          <nav>
            <ul className="nav_list">
              <li className="nav_list__item">
                <a className="nav_list__link" href="/#">
                  Разместить объявление
                </a>
              </li>
              <li className="nav_list__item">
                <a className="nav_list__link" href="/#">
                  Объявления
                </a>
              </li>
              <li className="nav_list__item">
                <a className="nav_list__link" href="/#">
                  Новости
                </a>
              </li>
              <li className="nav_list__item">
                <a className="nav_list__link" href="/#">
                  Контакты
                </a>
              </li>
              <li className="nav_list__item">
                <a className="nav_list__link" href="/#">
                  Мобильное приложение
                </a>
              </li>
            </ul>
          </nav>
          <div className="reference_info">
            <span className="reference_text">
              © ООО «ААА» 2022 •{" "}
              <a href="/#" className="reference_link">
                Политика о данных пользователей
              </a>{" "}
              • Оплачивая услуги на “Дом”, вы принимаете оферту
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
