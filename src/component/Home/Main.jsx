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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
          tenetur consectetur nemo amet autem alias, maxime vero ea! Dignissimos
          at accusamus quo aliquam rerum iusto ipsum deleniti dolorem illum
          obcaecati.
        </h1>
      </div>
      <div>
        <img src={i2} alt="" />
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          omnis! Fuga commodi animi qui tenetur dicta quibusdam, magnam illo,
          quis vitae vel doloribus ipsa facilis eveniet beatae sapiente iusto
          ullam?
        </h1>
      </div>
      <div>
        <img src={i3} alt="" />
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          accusantium dolor maxime neque beatae pariatur magni dolores, quas et
          provident adipisci autem, sit soluta illum perferendis eius nostrum
          inventore aperiam?
        </h1>
      </div>
    </div>
    <div className={style.end}>
      <NavLink to={'/game_1'}>
        Intelektuak
      </NavLink>
      <NavLink to={'/game_2'}>

        Intelektuak
        </NavLink>

      <NavLink to={'/game_1'}>

        Intelektuak
        </NavLink>

      <NavLink to={'/game_2'}>

        Intelektuak
        </NavLink>

      <NavLink to={'/game_1'}>

        <img src={i4} alt="" />
        </NavLink>

      <NavLink to={'/game_2'}>

        Intelektuak
        </NavLink>

    </div>
    </div>
  );
};

export default Main;
