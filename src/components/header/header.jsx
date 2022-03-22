import React from "react";
import logoPng from "../../styles/logo.png";
import altPng from "../../styles/alt.png";
import bellPng from "../../styles/bell.png";
import heartPng from "../../styles/heart.png";
import currentUserPng from "../../styles/currentUser.png";
import whiteSearchPng from "../../styles/whiteSearch.png";
import burgerPng from "../../styles/burger.png";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header_container">
        <div className="left_side">
          <img className="logo" src={logoPng} alt="logo" />
          <img className="burger" src={burgerPng} alt="burger" />
          <div className="header_search">
            <input
              type="text"
              className="header_input"
              placeholder="Поиск..."
            />
            <a href="/#" className="header_search__icon">
              <img src={whiteSearchPng} alt="search" />
            </a>
          </div>
          <nav className="header_nav">
            <ul className="navigation_list">
              <li className="navigation_list__item">
                <a className="navigation_list__link" href="/#">
                  Объявления
                </a>
              </li>
              <li className="navigation_list__item">
                <a className="navigation_list__link" href="/#">
                  Новинки
                </a>
              </li>
              <li className="navigation_list__item">
                <a className="navigation_list__link" href="/#">
                  Акции
                </a>
              </li>
              <li className="navigation_list__item">
                <a className="navigation_list__link" href="/#">
                  Подборки
                </a>
              </li>
              <li className="navigation_list__item">
                <a className="navigation_list__link" href="/#">
                  Новости
                </a>
              </li>
              <li className="navigation_list__item">
                <a className="navigation_list__link" href="/#">
                  Контакты
                </a>
              </li>
              <li className="navigation_list__item">
                <a className="navigation_list__link" href="/#">
                  Чаты
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="right_side">
          <ul className="actions">
            <li className="action">
              <img id="alt" src={altPng} alt="alt" className="action_img" />
            </li>
            <li className="action">
              <img id="bell" src={bellPng} alt="bell" className="action_img" />
            </li>
            <li className="action">
              <img
                id="heart"
                src={heartPng}
                alt="heart"
                className="action_img"
              />
            </li>
          </ul>
          <div className="user">
            <img className="user_image" src={currentUserPng} alt="user" />
            <div className="user_info">
              <p className="user_info__upper">Ирина Ларионова</p>
              <p className="user_info__lower">Руководитель агентства</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
