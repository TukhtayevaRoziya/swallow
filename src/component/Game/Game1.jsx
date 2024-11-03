import React, { useState } from "react";
import Header from "../Header/Header";

import i1 from "../../acsess/i1.png";

import style from "./Game.module.css";

const Game1 = () => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "1 + 1 + 3 + 4 nimaga teng?",
      options: [
        { id: 0, text: "9", isCorrect: true },
        { id: 1, text: "10", isCorrect: false },
        { id: 2, text: "8", isCorrect: false },
        { id: 3, text: "5", isCorrect: false },
      ],
    },
    {
      text: "17 + 13 nimaga teng?",

      options: [
        { id: 0, text: "20", isCorrect: false },
        { id: 1, text: "23", isCorrect: false },
        { id: 2, text: "30", isCorrect: true },
        { id: 3, text: "27", isCorrect: false },
      ],
    },
    {
      text: "99 + 13 nimaga teng",

      options: [
        { id: 0, text: "112", isCorrect: true },
        { id: 1, text: "102", isCorrect: false },
        { id: 2, text: "101", isCorrect: false },
        { id: 3, text: "110", isCorrect: false },
      ],
    },
    // {
    //   text: "Mos belgini Tanlang",
    //   img: i4_0,

    //   options: [
    //     { id: 0, text: i4_1, isCorrect: true },
    //     { id: 1, text: i4_2, isCorrect: false },
    //     { id: 2, text: i4_3, isCorrect: false },
    //     { id: 3, text: i4_4, isCorrect: false },
    //   ],
    // },
    // {
    //   text: "Mos belgini Tanlang",
    //   img: i5_0,

    //   options: [
    //     { id: 0, text: i5_1, isCorrect: true },
    //     { id: 1, text: i5_2, isCorrect: false },
    //     { id: 2, text: i5_3, isCorrect: false },
    //     { id: 3, text: i5_4, isCorrect: false },
    //   ],
    // },
    // {
    //   text: "Mos belgini Tanlang",
    //   img: i6_0,

    //   options: [
    //     { id: 0, text: i6_1, isCorrect: false },
    //     { id: 1, text: i6_2, isCorrect: true },
    //     { id: 2, text: i6_3, isCorrect: false },
    //     { id: 3, text: i6_4, isCorrect: false },
    //   ],
    // },
    // {
    //   text: "Mos belgini Tanlang",
    //   img: i7_0,

    //   options: [
    //     { id: 0, text: i7_1, isCorrect: false },
    //     { id: 1, text: i7_2, isCorrect: true },
    //     { id: 2, text: i7_3, isCorrect: false },
    //     { id: 3, text: i7_4, isCorrect: false },
    //   ],
    // },
    // {
    //   text: "Mos belgini Tanlang",
    //   img: i8_0,

    //   options: [
    //     { id: 0, text: i8_1, isCorrect: false },
    //     { id: 1, text: i8_2, isCorrect: false },
    //     { id: 2, text: i8_3, isCorrect: false },
    //     { id: 3, text: i8_4, isCorrect: true },
    //   ],
    // },
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
            {/* <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <h2>{questions[currentQuestion].img}</h2>
            </div> */}

            <ul>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect)}
                  >
                    <h2>
                    {option.text}
                    </h2>
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

export default Game1;
