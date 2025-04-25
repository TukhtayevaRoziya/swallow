import React, { useRef, useState, useLayoutEffect } from "react";
import Confetti from "react-confetti";
import "./FruitMatchGame.css";

const fruits = [
  { id: "apple", img: "https://cdn-icons-png.flaticon.com/512/590/590682.png" },
  { id: "banana", img: "https://cdn-icons-png.flaticon.com/512/590/590685.png" },
  { id: "cherry", img: "https://cdn-icons-png.flaticon.com/512/590/590686.png" },
  { id: "orange", img: "https://cdn-icons-png.flaticon.com/512/590/590689.png" },
  { id: "pear", img: "https://cdn-icons-png.flaticon.com/512/590/590687.png" },
  { id: "pomegranate", img: "https://cdn-icons-png.flaticon.com/512/590/590688.png" },
];

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const FindTheImageGame = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const leftRefs = useRef({});
  const rightRefs = useRef({});
  const [leftFruits] = useState(fruits);
  const [rightFruits] = useState(shuffle(fruits));
  const [selectedFrom, setSelectedFrom] = useState(null);
  const [lines, setLines] = useState([]);
  const [matches, setMatches] = useState([]);
  const [win, setWin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getCenter = (el) => {
    return {
      x: el.offsetLeft + el.offsetWidth / 2,
      y: el.offsetTop + el.offsetHeight / 2,
    };
  };

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    lines.forEach(({ fromEl, toEl, color }) => {
      if (!fromEl || !toEl) return;
      const from = getCenter(fromEl);
      const to = getCenter(toEl);
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.strokeStyle = color;
      ctx.lineWidth = 4;
      ctx.stroke();
    });
  }, [lines]);

  const handleClick = (id, el, side) => {
    if (!selectedFrom) {
      setSelectedFrom({ id, el, side });
    } else {
      if (selectedFrom.side === side) {
        setSelectedFrom({ id, el, side });
        return;
      }

      const isMatch = selectedFrom.id === id;
      setLines((prev) => [
        ...prev,
        { fromEl: selectedFrom.el, toEl: el, color: isMatch ? "green" : "red" },
      ]);
      setMatches((prev) => [
        ...prev,
        { fromId: selectedFrom.id, toId: id, isCorrect: isMatch },
      ]);
      setSelectedFrom(null);

      if (!isMatch) {
        setErrorMessage("❌ Xato! Qayta urinib ko‘ring!");
        setTimeout(() => setErrorMessage(""), 2000);
      }

      if (matches.length + 1 === fruits.length) {
        const allCorrect = [...matches, { fromId: selectedFrom.id, toId: id, isCorrect: isMatch }]
          .every((m) => m.isCorrect);
        if (allCorrect) {
          setTimeout(() => setWin(true), 500);
        }
      }
    }
  };

  return (
    <div className="match-game" ref={containerRef}>
      {win && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <h2 className="title">🍓 Mevalarni bog‘lang!</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <canvas ref={canvasRef} width={900} height={700} className="game-canvas" />
      <div className="columns">
        <div className="column">
          {leftFruits.map((fruit) => {
            const matched = matches.find((m) => m.fromId === fruit.id);
            return (
              <img
                key={fruit.id}
                ref={(el) => (leftRefs.current[fruit.id] = el)}
                src={fruit.img}
                alt={fruit.id}
                className={`fruit ${matched ? (matched.isCorrect ? "correct" : "wrong") : ""}`}
                onClick={() => handleClick(fruit.id, leftRefs.current[fruit.id], "left")}
              />
            );
          })}
        </div>
        <div className="column right">
          {rightFruits.map((fruit) => {
            const matched = matches.find((m) => m.toId === fruit.id);
            return (
              <img
                key={fruit.id}
                ref={(el) => (rightRefs.current[fruit.id] = el)}
                src={fruit.img}
                alt={fruit.id}
                className={`fruit ${matched ? (matched.isCorrect ? "correct" : "wrong") : ""}`}
                onClick={() => handleClick(fruit.id, rightRefs.current[fruit.id], "right")}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default FindTheImageGame;