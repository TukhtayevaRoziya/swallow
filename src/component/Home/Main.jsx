import React from "react";
import i1 from "../../acsess/i1.png";
import i2 from "../../acsess/i2.png";
import i3 from "../../acsess/i3.png";
import i4 from "../../acsess/i4.png";

import style from "./Home.module.css";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <div className={style.mainBody}>
    <div className={style.main}>
      <div>
        <img src={i1} alt="" />
        <h1>
        Bolalarning intellektual salohiyatini aniqlash bo‘limining maqsadi - bolalarning mantiqiy fikrlash, muammolarni hal qilish qobiliyati, xotira, e'tibor va ijodiy fikrlash darajasini aniqlashdir. Ushbu bo‘lim orqali bola bilim va qobiliyatlari to‘liq baholanib, maktabga tayyorgarlik jarayonida ularga ko‘mak beriladi.
        </h1>
      </div>
      <div>
        <img src={i2} alt="" />
        <h1>
        Maxsus tayyorgarlik bo‘limining vazifasi -   bolalar o‘qish, yozish, hisoblash kabi asosiy bilimlarni va ijtimoiy ko‘nikmalarni mustahkamlaydi, shuningdek, jamoa bilan ishlash va muammolarni mustaqil hal qilish ko‘nikmalarini rivojlantiradi. Asosan turli fanlarga asoslangan testlar bo‘ladi, jumladan matematika va ona tili. Bu testlar bolalarning hisoblash qobiliyatini, savodxonlik va tahlil qilish ko‘nikmalarini baholashga yordam beradi.
        </h1>
      </div>
      <div>
        <img src={i3} alt="" />
        <h1>
        Shaxsiy ruhiy bo‘limining vazifasi - bolalarning ruhiy rivojlanishini qo‘llab-quvvatlash va ularga intellektual o‘sishni ta'minlovchi imkoniyatlarni yaratishdir. Bu bo‘limda bolalar rasmlarga asoslangan va intellektni oshiruvchi turli o‘yinlarni o‘ynaydi. o‘yinlar orqali bolalar e'tiborini kuchaytirish, tasavvurini rivojlantirish, ijodkorlik va fikrlash qobiliyatlarini oshirishga imkon yaratadi. Shaxsiy ruhiy rivojlanish bolalarning o‘ziga ishonchini mustahkamlash va o‘quv jarayoniga tayyorlashda muhim o‘rin tutadi.
        </h1>
      </div>
    </div>
    <div className={style.end}>
      <NavLink to={'/game_1'}>
        Intelektuak
      </NavLink>
      <NavLink to={'/game_2'}>

       Maxsus tayyorgarlik
        </NavLink>

      <NavLink to={'/game_1'}>

      Shaxsiy (ruhiy psiholagik)
        </NavLink>

     

      <NavLink to={'/game_1'}>

        <img src={i4} alt="" />
        </NavLink>

      <NavLink to={'/game_2'}>

      Jismoniy
        </NavLink>
        <NavLink to={'/game_2'}>

Intelektuak
</NavLink>
    </div>
    </div>
  );
};

export default Main;
