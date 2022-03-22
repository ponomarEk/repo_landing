import React from "react";
import dropdownPng from "../../styles/dropdown.png";
import "./search.css";

const Search = () => {
  return (
    <section className="search_section">
      <div className="search">
        <div className="search_input_block">
          <input
            type="text"
            placeholder="Поиск по недвижимости..."
            className="search_input"
          />
        </div>
        <div className="dropdown">
          <div className="drop_btn" href="/#">
            <p>Любая категория</p>
            <img src={dropdownPng} alt="dropdown" className="drop_btn__image" />
          </div>
          <div className="dropdown_content">
            <a className="dropdown_item" href="/#">
              Link 1
            </a>
            <a className="dropdown_item" href="/#">
              Link 2
            </a>
            <a className="dropdown_item" href="/#">
              Link 3
            </a>
          </div>
        </div>
        <div className="search_btn_block">
          <button class="search_btn">
            <p>Найти</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;
