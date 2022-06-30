import sprite from "../../images/sprite.svg";
import s from "./Header.module.css";

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.header_container}>
        <div className={s.header_wrap}>
          <svg className={s.header_logo}>
            <use href={sprite + "#logo"} alt="Logo company" />
          </svg>
          <div className={s.header_box}>
            <nav className={s.header_nav}>
              <a
                href="javascript:void(0);"
                rel="noreferrer"
                className={s.header_link}
              >
                shop
              </a>
              <a
                href="javascript:void(0);"
                rel="noreferrer"
                className={s.header_link}
              >
                our company
              </a>
              <a
                href="javascript:void(0);"
                rel="noreferrer"
                className={s.header_link}
              >
                news & blog
              </a>
              <a
                href="javascript:void(0);"
                rel="noreferrer"
                className={`${s.header_link} ${s.header_link_join}`}
              >
                join us
              </a>
            </nav>
            <div>
              <div className={s.header_menu}>
                <div className={s.header_menu_item}>
                  <svg className={s.menu_icon_login}>
                    <use href={sprite + "#login"} alt="search" />
                  </svg>
                  <p className={s.menu_text}>Log In</p>
                </div>
                <div className={s.header_menu_item}>
                  <svg className={s.menu_icon}>
                    <use href={sprite + "#cart"} alt="search" />
                  </svg>
                  <p className={`${s.menu_text} ${s.space}`}>Cart(0)</p>
                  <p className={s.menu_text}>Subtotal ($0.00)</p>
                </div>
              </div>

              <div className={s.header_search}>
                <svg className={s.search_icon}>
                  <use href={sprite + "#search"} alt="search" />
                </svg>
                <input
                  className={s.search_input}
                  type="text"
                  autoComplete="off"
                  placeholder="Search products, categories, etc"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
