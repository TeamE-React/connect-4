import React from 'react';
import styles from '../../styles/Home.module.css';

export default function PlayerModeSVG() {
  return (
    <div className={styles.margin_y}>
      <div className={styles.svg_container}>
        <svg
          viewBox="0 0 300 70"
          width="300"
          height="70"
          xmlns="http://www.w3.org/2000/svg"
          display="inline-block"
        >
          <text
            x="50%"
            y="50%"
            fontSize="3rem"
            textAnchor="middle"
            dominantBaseline="central"
            stroke="#ffffff"
            strokeWidth="0.6rem"
            strokeLinejoin="round"
          >
            Player Mode
          </text>
          <text
            x="50%"
            y="50%"
            fontSize="3rem"
            textAnchor="middle"
            dominantBaseline="central"
            stroke="#3a6ac2"
            strokeWidth="0.3rem"
            strokeLinejoin="round"
          >
            Player Mode
          </text>
          <text
            fill="url(#gradient100)"
            x="50%"
            y="50%"
            fontSize="3rem"
            textAnchor="middle"
            dominantBaseline="central"
          >
            Player Mode
          </text>
          <defs>
            <linearGradient id="gradient100" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0095ff" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
