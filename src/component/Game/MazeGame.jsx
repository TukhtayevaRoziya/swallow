import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./MazeGame.css";
import Header from "../Header/Header";

const CELL_SIZE = 50;

const maze = [
  ["#", "#", "#", "#", "#", "#", "#", "#"],
  ["#", "S", " ", " ", "#", " ", " ", "#"],
  ["#", "#", "#", " ", "#", " ", "#", "#"],
  ["#", " ", "#", " ", " ", " ", "#", "#"],
  ["#", " ", "#", "#", "#", " ", " ", "#"],
  ["#", " ", " ", " ", "#", "#", " ", "#"],
  ["#", "#", "#", " ", " ", " ", "E", "#"],
  ["#", "#", "#", "#", "#", "#", "#", "#"],
];

const MazeGame = () => {
  const [playerPos, setPlayerPos] = useState({ row: 1, col: 1 });
  const [message, setMessage] = useState("");
  const [won, setWon] = useState(false);

  const findPath = (start, end) => {
    const queue = [[start]];
    const visited = new Set();
    visited.add(`${start.row},${start.col}`);

    while (queue.length > 0) {
      const path = queue.shift();
      const { row, col } = path[path.length - 1];

      if (row === end.row && col === end.col) return path;

      const directions = [
        { dr: -1, dc: 0 },
        { dr: 1, dc: 0 },
        { dr: 0, dc: -1 },
        { dr: 0, dc: 1 },
      ];

      for (let { dr, dc } of directions) {
        const newRow = row + dr;
        const newCol = col + dc;
        const key = `${newRow},${newCol}`;
        const isValid =
          maze[newRow] &&
          maze[newRow][newCol] &&
          maze[newRow][newCol] !== "#" &&
          !visited.has(key);
        if (isValid) {
          visited.add(key);
          queue.push([...path, { row: newRow, col: newCol }]);
        }
      }
    }

    return null;
  };

  const walkPath = async (path) => {
    for (let i = 1; i < path.length; i++) {
      await new Promise((res) => setTimeout(res, 100)); // 100ms qilib TEZLATAMIZ
      setPlayerPos(path[i]);
    }
  };

  const handleCellClick = (row, col) => {
    if (won || maze[row][col] === "#" || (row === playerPos.row && col === playerPos.col)) return;
    const path = findPath(playerPos, { row, col });
    if (path) {
      walkPath(path);
      if (maze[row][col] === "E") {
        setTimeout(() => {
          setMessage("🎉 Tabriklaymiz! Siz yutdingiz!");
          setWon(true);
        }, path.length * 300);
      }
    } else {
      setMessage("🚫 Yo‘l topilmadi!");
    }
  };

  return (

    <div>
      <Header />

      <div className="maze-container">
        <p className="instruction">
          Katakka bosing — yashil kvadrat avtomatik yuradi!
        </p>

        {won && <Confetti width={window.innerWidth} height={window.innerHeight} />}

        <div
          className="maze-grid"
          style={{
            width: `${maze[0].length * CELL_SIZE}px`,
            height: `${maze.length * CELL_SIZE}px`,
          }}
        >
          {maze.map((row, rIdx) =>
            row.map((cell, cIdx) => {
              let cellClass = "cell";
              if (cell === "#") cellClass += " wall";
              if (cell === "E") cellClass += " end";
              return (
                <div
                  key={`${rIdx}-${cIdx}`}
                  className={cellClass}
                  onClick={() => handleCellClick(rIdx, cIdx)}
                  style={{
                    top: `${rIdx * CELL_SIZE}px`,
                    left: `${cIdx * CELL_SIZE}px`,
                  }}
                ></div>
              );
            })
          )}
          <div
            className="player"
            style={{
              top: `${playerPos.row * CELL_SIZE}px`,
              left: `${playerPos.col * CELL_SIZE}px`,
            }}
          />
        </div>

        {message && <div className="message win-message">{message}</div>}
      </div>
    </div>

  );
};

export default MazeGame;
