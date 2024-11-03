import React from "react";
import i1 from "../../acsess/Резервная_копия_22222.png";
import i2 from "../../acsess/icon.png";

import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.body}>
      <img src={i1} alt="" />
      <div className={style.right}>
        <p>
          Sulaymonov <br /> Javohir <br />7 yosh
        </p>
        <img src={i2} alt="" />
      </div>
    </div>
  );
};

export default Header;
