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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nemo
        id quibusdam ducimus magnam vitae obcaecati. Ipsum, in repudiandae
        laboriosam, aliquam officia quaerat, eaque voluptatibus doloribus nam
        doloremque ex quia? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam nemo id quibusdam ducimus magnam vitae obcaecati. Ipsum,
        in repudiandae laboriosam, aliquam officia quaerat, eaque voluptatibus
        doloribus nam doloremque ex quia? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam nemo id quibusdam ducimus magnam vitae
        obcaecati. Ipsum, in repudiandae laboriosam, aliquam officia quaerat,
        eaque voluptatibus doloribus nam doloremque ex quia? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quisquam nemo id quibusdam
        ducimus magnam vitae obcaecati. Ipsum, in repudiandae laboriosam,
        aliquam officia quaerat, eaque voluptatibus doloribus nam doloremque ex
        quia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        nemo id quibusdam ducimus magnam vitae obcaecati. Ipsum, in repudiandae
        laboriosam, aliquam officia quaerat, eaque voluptatibus doloribus nam
        doloremque ex quia? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam nemo id quibusdam ducimus magnam vitae obcaecati. Ipsum,
        in repudiandae laboriosam, aliquam officia quaerat, eaque voluptatibus
        doloribus nam doloremque ex quia?
      </p>
      <Main />
      <div className={style.footer}></div>
    </div>
  );
};

export default Home;
