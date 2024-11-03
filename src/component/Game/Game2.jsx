import React, { useState } from "react";
import Header from "../Header/Header";

import i1 from "../../acsess/i1.png";
import i1_0 from "../../acsess/belgilar/1/1.png";
import i1_1 from "../../acsess/belgilar/1/1.1.png";
import i1_2 from "../../acsess/belgilar/1/1.2.png";
import i1_3 from "../../acsess/belgilar/1/1.3.png";
import i1_4 from "../../acsess/belgilar/1/1.4.png";

import i2_0 from "../../acsess/belgilar/2/2.png";
import i2_1 from "../../acsess/belgilar/2/2.1.png";
import i2_2 from "../../acsess/belgilar/2/2.2.png";
import i2_3 from "../../acsess/belgilar/2/2.3.png";
import i2_4 from "../../acsess/belgilar/2/2.4.png";

import i3_0 from "../../acsess/belgilar/3/3.png";
import i3_1 from "../../acsess/belgilar/3/3.1.png";
import i3_2 from "../../acsess/belgilar/3/3.2.png";
import i3_3 from "../../acsess/belgilar/3/3.3.png";
import i3_4 from "../../acsess/belgilar/3/3.4.png";

import i4_0 from "../../acsess/belgilar/4/4.png";
import i4_1 from "../../acsess/belgilar/4/4.1.png";
import i4_2 from "../../acsess/belgilar/4/4.2.png";
import i4_3 from "../../acsess/belgilar/4/4.3.png";
import i4_4 from "../../acsess/belgilar/4/4.4.png";

import i5_0 from "../../acsess/belgilar/5/5.png";
import i5_1 from "../../acsess/belgilar/5/5.1.png";
import i5_2 from "../../acsess/belgilar/5/5.2.png";
import i5_3 from "../../acsess/belgilar/5/5.3.png";
import i5_4 from "../../acsess/belgilar/5/5.4.png";

import i6_0 from "../../acsess/belgilar/6/6.png";
import i6_1 from "../../acsess/belgilar/6/6.1.png";
import i6_2 from "../../acsess/belgilar/6/6.2.png";
import i6_3 from "../../acsess/belgilar/6/6.3.png";
import i6_4 from "../../acsess/belgilar/6/6.4.png";

import i7_0 from "../../acsess/belgilar/7/7.png";
import i7_1 from "../../acsess/belgilar/7/7.1.png";
import i7_2 from "../../acsess/belgilar/7/7.2.png";
import i7_3 from "../../acsess/belgilar/7/7.3.png";
import i7_4 from "../../acsess/belgilar/7/7.4.png";

import i8_0 from "../../acsess/belgilar/8/8.png";
import i8_1 from "../../acsess/belgilar/8/8.1.png";
import i8_2 from "../../acsess/belgilar/8/8.2.png";
import i8_3 from "../../acsess/belgilar/8/8.3.png";
import i8_4 from "../../acsess/belgilar/8/8.4.png";

import style from "./Game.module.css";

const Game2 = () => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Mos belgini Tanlang",
      img: i1_0,
      options: [
        { id: 0, text: i1_1, isCorrect: false },
        { id: 1, text: i1_2, isCorrect: false },
        { id: 2, text: i1_3, isCorrect: false },
        { id: 3, text: i1_4, isCorrect: true },
      ],
    },
    {
      text: "Mos belgini Tanlang",
      img: i2_0,

      options: [
        { id: 0, text: i2_1, isCorrect: false },
        { id: 1, text: i2_2, isCorrect: false },
        { id: 2, text: i2_3, isCorrect: true },
        { id: 3, text: i2_4, isCorrect: false },
      ],
    },
    {
      text: "Mos belgini Tanlang",
      img: i3_0,

      options: [
        { id: 0, text: i3_1, isCorrect: true },
        { id: 1, text: i3_2, isCorrect: false },
        { id: 2, text: i3_3, isCorrect: false },
        { id: 3, text: i3_4, isCorrect: false },
      ],
    },
    {
      text: "Mos belgini Tanlang",
      img: i4_0,

      options: [
        { id: 0, text: i4_1, isCorrect: true },
        { id: 1, text: i4_2, isCorrect: false },
        { id: 2, text: i4_3, isCorrect: false },
        { id: 3, text: i4_4, isCorrect: false },
      ],
    },
    {
      text: "Mos belgini Tanlang",
      img: i5_0,

      options: [
        { id: 0, text: i5_1, isCorrect: true },
        { id: 1, text: i5_2, isCorrect: false },
        { id: 2, text: i5_3, isCorrect: false },
        { id: 3, text: i5_4, isCorrect: false },
      ],
    },
    {
      text: "Mos belgini Tanlang",
      img: i6_0,

      options: [
        { id: 0, text: i6_1, isCorrect: false },
        { id: 1, text: i6_2, isCorrect: true },
        { id: 2, text: i6_3, isCorrect: false },
        { id: 3, text: i6_4, isCorrect: false },
      ],
    },
    {
      text: "Mos belgini Tanlang",
      img: i7_0,

      options: [
        { id: 0, text: i7_1, isCorrect: false },
        { id: 1, text: i7_2, isCorrect: true },
        { id: 2, text: i7_3, isCorrect: false },
        { id: 3, text: i7_4, isCorrect: false },
      ],
    },
    {
      text: "Mos belgini Tanlang",
      img: i8_0,

      options: [
        { id: 0, text: i8_1, isCorrect: false },
        { id: 1, text: i8_2, isCorrect: false },
        { id: 2, text: i8_3, isCorrect: false },
        { id: 3, text: i8_4, isCorrect: true },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  return (
    <div>
      <Header />
      <div className={style.body}>
        <div className={style.header}>
          <img src={i1} alt="" />
          <h1>Intelektual</h1>
        </div>
        {showResults ? (
          <h1 className={style.ttl}>Natija</h1>
        ) : (
          <h1 className={style.ttl}>Testni boshlash</h1>
        )}

        {showResults ? (
          <div className={style.final_results}>
            <div className={style.result}>
              <h2>
                <span>Savollar soni </span> - {questions.length} ta
              </h2>
              <h2>
                <span>To'g'ri </span> - {score} ta
              </h2>
              <h2>
                <span>Noto'g'ri </span>- {questions.length - score} ta
              </h2>
            </div>
            <button onClick={() => restartGame()}>Boshqatdan boshlash</button>
          </div>
        ) : (
          <div className={style.question_card}>
            <h2>
              Savollar: {currentQuestion + 1} / {questions.length}
            </h2>
            <h3 className={style.question_text}>
              {questions[currentQuestion].text}
            </h3>
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <img
                style={{ width: "300px" }}
                src={questions[currentQuestion].img}
                alt=""
              />
            </div>

            <ul>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect)}
                  >
                    <img style={{ width: "100px" }} src={option.text} alt="" />
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game2;
