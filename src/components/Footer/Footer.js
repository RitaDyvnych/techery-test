import sprite from "../../images/sprite.svg";
import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footer_wrap}>
        <div className={`${s.footer_box} ${s.footer_box_mright}`}>
          <h4 className={s.footer_title}>PRODUCTS</h4>
          <a className={s.footer_link} href="javascript:void(0);">
            Product Catalog
          </a>
          <a className={s.footer_link} href="javascript:void(0);">
            Switch Brands
          </a>
          <a className={s.footer_link} href="javascript:void(0);">
            Product Return Policy
          </a>
        </div>
        <div className={`${s.footer_box} ${s.footer_box_mright}`}>
          <h4 className={s.footer_title}>GET STARTED</h4>
          <a className={s.footer_link} href="javascript:void(0);">
            Frequently Asked Questions
          </a>
          <a className={s.footer_link} href="javascript:void(0);">
            Income Disclosure
          </a>
          <a className={s.footer_link} href="javascript:void(0);">
            Compensation
          </a>
        </div>
        <div className={s.footer_box}>
          <h4 className={s.footer_title}>ABOUT</h4>
          <a className={s.footer_link} href="javascript:void(0);">
            Our Story
          </a>
          <a className={s.footer_link} href="javascript:void(0);">
            Events
          </a>
          <a className={s.footer_link} href="javascript:void(0);">
            Employment
          </a>
          <a className={s.footer_link} href="javascript:void(0);">
            Worldwide Offices
          </a>
          <a className={s.footer_link} href="javascript:void(0);">
            Direct Selling Association
          </a>
          <a className={s.footer_link} href="javascript:void(0);">
            Code of Ethics
          </a>
        </div>
      </div>
      <div className={s.footer_box}>
        <h4 className={s.footer_title}>SOCIAL MEDIA</h4>
        <div className={s.footer_social_box}>
          <a className={s.footer_social_link} href="">
            <svg className={s.footer_social_icon}>
              <use href={sprite + "#youtube"} alt="youtube" />
            </svg>
          </a>
          <a className={s.footer_social_link} href="">
            <svg className={s.footer_social_icon}>
              <use href={sprite + "#facebook"} alt="facebook" />
            </svg>
          </a>
          <a className={s.footer_social_link} href="">
            <svg className={s.footer_social_icon}>
              <use href={sprite + "#instagram"} alt="instagram" />
            </svg>
          </a>
          <a className={s.footer_social_link} href="">
            <svg className={s.footer_social_icon}>
              <use href={sprite + "#linkedin"} alt="linkedin" />
            </svg>
          </a>
        </div>
        <h4 className={s.footer_title}>VITALSIGNS PODCAST</h4>
        <div className={s.footer_podcast_box}>
          <a className={s.footer_social_link} href="">
            <svg className={s.footer_social_icon}>
              <use href={sprite + "#spotify"} alt="spotify" />
            </svg>
          </a>
          <a className={s.footer_social_link} href="">
            <svg className={s.footer_social_icon}>
              <use href={sprite + "#google-podcast"} alt="google-podcast" />
            </svg>
          </a>
          <a className={s.footer_social_link} href="">
            <svg className={s.footer_social_icon}>
              <use href={sprite + "#apple-podcast"} alt="apple-podcast" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
