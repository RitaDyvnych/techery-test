import sprite from "../../images/sprite.svg";
import HeroImg from "../../images/hero.jpeg";
import s from "./Main.module.css";

export default function Main() {
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
      </section>
      <section className={s.forClient}>
        <h3 className={s.forClient_title}>Become a Client</h3>
        <p className={s.forClient_text}>
          Learn more about how you can launch your business with FastStart!
        </p>
        <a
          className={s.forClient_link}
          href="javascript:void(0);"
          rel="noreferrer"
        >
          More Information
        </a>
      </section>
    </main>
  );
}
