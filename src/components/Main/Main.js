import sprite from "../../images/sprite.svg";
import HeroImg from "../../images/hero.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import products from "./products.json";
import s from "./Main.module.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={s.arrowRight} onClick={onClick}>
      <svg className={s.arrow_icon}>
        <use href={sprite + "#right"} alt="arrow right" />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={s.arrowLeft} onClick={onClick}>
      <svg className={s.arrow_icon}>
        <use href={sprite + "#left"} alt="arrow left" />
      </svg>
    </div>
  );
}

export default function Main() {
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1619,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main className={s.main}>
      <section className={s.hero}>
        <h1 className={s.hero_title}>CONGRATULATIONS!</h1>
        <p className={s.hero_order}>Your order number is 1234567890</p>
        <p className={s.hero_text}>
          You will receive an email shortly with more details and a tracking
          number<br></br>so you can check the status of your order.
        </p>
        <img className={s.hero_image} src={HeroImg} alt="cofee" />
      </section>
      <section className={s.products}>
        <h2 className={s.products_title}>
          START SAVING TODAY ON PRODUCTS LIKE THESE...
        </h2>
        <div className={s.slider}>
          <Slider {...sliderSettings}>
            {products.map((product) => (
              <div className={s.product_box} key={product.id}>
                <div>
                  <h4 className={s.product_name}>{product.name}</h4>
                  <p className={s.product_price}>{product.price}</p>
                  <img
                    className={s.product_img}
                    src={product.image}
                    alt={product.title}
                  />
                  <p className={s.product_descr}>{product.descr}</p>
                  <a className={s.forClient_link} href="/">
                    More Information
                  </a>
                </div>
                <button type="button" className={s.product_button}>
                  Add to card
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className={s.forClient}>
        <h3 className={s.forClient_title}>Become a Client</h3>
        <p className={s.forClient_text}>
          Learn more about how you can launch your business with FastStart!
        </p>
        <a href="/" className={s.forClient_link}>
          More Information
        </a>
      </section>
    </main>
  );
}
