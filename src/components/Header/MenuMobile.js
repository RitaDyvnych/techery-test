import sprite from "../../images/sprite.svg";
import s from "./Menu.module.css";

export default function MenuMobile({ active, setActive }) {
  return (
    <div
      className={`${s.menu} ${active === true && s.menuActive}`}
      onClick={() => setActive(false)}
    >
      <div className={s.blur} />
      <div className={s.content} onClick={(e) => e.stopPropagation()}>
        <nav className={s.menu_nav}>
          <a href="/" className={s.menu_link}>
            shop
          </a>
          <a href="/" className={s.menu_link}>
            our company
          </a>
          <a href="/" className={s.menu_link}>
            news & blog
          </a>
          <a href="/" className={`${s.menu_link}`}>
            join us
          </a>
        </nav>
        <div className={s.menu_wrap}>
          <div className={s.header_menu}>
            <div className={`${s.header_menu_item} ${s.mob_space}`}>
              <svg className={s.menu_icon_login}>
                <use href={sprite + "#login"} alt="search" />
              </svg>
              <p className={s.menu_text}>Log In</p>
            </div>
            <div className={`${s.header_menu_item} ${s.mob_space}`}>
              <svg className={s.menu_icon}>
                <use href={sprite + "#cart"} alt="search" />
              </svg>
              <p className={`${s.menu_text} ${s.space}`}>Cart(0)</p>
            </div>
            <p className={`${s.menu_text} ${s.mob_space}`}>Subtotal ($0.00)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
