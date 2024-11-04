import React from "react";
import Header from "../Header/Header";
import Main from "./Main";

import style from "./Home.module.css";
// import Main from "./Main";

const Home = () => {
  return (
    <div className={style.body}>
      <Header />
      <p className={style.txt}>
      Maktabgacha ta'lim muassasasini bitiruvchi bolalarni maktabga tayyorlash holatini tekshiruvchi platformaning asosiy yutuqlari quyidagilardan iborat: individuallashtirilgan yondashuv, rivojlanishni diagnostika qilish va kuzatish, interaktiv va qiziqarli materiallar, keng qamrovli baholash, ota-onalar bilan faol hamkorlik, statistik va tahliliy hisobotlar, shuningdek, maktabga moslashishni yengillashtirish. Ushbu platforma bolalarning maktabga tayyorgarlik jarayonini samarali boshqarishga va o‘rganishga qiziqish uyg‘otishga yordam beradi.
      </p>
      <Main />
      <div className={style.footer}></div>
    </div>
  );
};

export default Home;
