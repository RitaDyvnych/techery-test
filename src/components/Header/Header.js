import sprite from "../../images/sprite.svg";
import s from "./Header.module.css";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { useState } from "react";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);
  function onMenuClick() {
    setActiveMenu(!activeMenu);
  }
  return (
    <header className={s.header}>
      <div className={s.header_container}>
        <div className={s.header_wrap}>
          <svg className={s.header_logo}>
            <use href={sprite + "#logo"} alt="Logo company" />
          </svg>
          <div className={s.menu} onClick={onMenuClick}>
            <div className={s.bar1}></div>
            <div className={s.bar1}></div>
            <div className={s.bar1}></div>
          </div>
          <Menu />
          <MenuMobile active={activeMenu} setActive={setActiveMenu} />
        </div>
      </div>
    </header>
  );
}
