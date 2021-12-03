import React, { useContext } from "react";
import AppContext from "../../contexts/AppContext";

// Styles
import styles from "../../styles/Home.module.css";

const WinnerSVG = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <div className={styles.svg_container}>
        <svg
          viewBox="0 0 500 60"
          width="500"
          height="60"
          xmlns="http://www.w3.org/2000/svg"
          display="inline-block"
        >
          <text
            x="50%"
            y="50%"
            fontSize="2.5em"
            textAnchor="middle"
            dominantBaseline="central"
            stroke="#ffffff"
            strokeWidth="0.6rem"
            strokeLinejoin="round"
          >
            {state.currentPlayer.name}
          </text>
          <text
            x="50%"
            y="50%"
            fontSize="2.5em"
            textAnchor="middle"
            dominantBaseline="central"
            stroke="#3a6ac2"
            strokeWidth="0.3rem"
            strokeLinejoin="round"
          >
            {state.currentPlayer.name}
          </text>
          <text
            fill="url(#gradient100)"
            x="50%"
            y="50%"
            fontSize="2.5em"
            textAnchor="middle"
            dominantBaseline="central"
          >
            {state.currentPlayer.name}
          </text>
          <defs>
            <linearGradient id="gradient100" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0095ff" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={styles.svg_container}>
        <svg
          viewBox="0 0 300 50"
          width="300"
          height="50"
          xmlns="http://www.w3.org/2000/svg"
          display="inline-block"
        >
          <text
            x="50%"
            y="50%"
            fontSize="2em"
            textAnchor="middle"
            dominantBaseline="central"
            stroke="#ffffff"
            strokeWidth="0.6rem"
            strokeLinejoin="round"
          >
            is the
          </text>
          <text
            x="50%"
            y="50%"
            fontSize="2em"
            textAnchor="middle"
            dominantBaseline="central"
            stroke="#3a6ac2"
            strokeWidth="0.3rem"
            strokeLinejoin="round"
          >
            is the
          </text>
          <text
            fill="url(#gradient100)"
            x="50%"
            y="50%"
            fontSize="2em"
            textAnchor="middle"
            dominantBaseline="central"
          >
            is the
          </text>
        </svg>
      </div>
      <div className={styles.svg_container}>
        <svg
          viewBox="0 0 500 60"
          width="500"
          height="60"
          xmlns="http://www.w3.org/2000/svg"
          display="inline-block"
        >
          <text
            x="50%"
            y="50%"
            fontSize="2.5em"
            textAnchor="middle"
            dominantBaseline="central"
            stroke="#ffffff"
            strokeWidth="0.6rem"
            strokeLinejoin="round"
          >
            Winner !!
          </text>
          <text
            x="50%"
            y="50%"
            fontSize="2.5em"
            textAnchor="middle"
            dominantBaseline="central"
            stroke="#3a6ac2"
            strokeWidth="0.3rem"
            strokeLinejoin="round"
          >
            Winner !!
          </text>
          <text
            fill="url(#gradient100)"
            x="50%"
            y="50%"
            fontSize="2.5em"
            textAnchor="middle"
            dominantBaseline="central"
          >
            Winner !!
          </text>
        </svg>
      </div>
    </>
  );
};

export default WinnerSVG;