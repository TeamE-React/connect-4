### Connect 4

[日本語版 README はこちら](https://github.com/TeamE-React/connect-4/blob/main/README-ja.md)

## Demo

![output4](https://user-images.githubusercontent.com/66197642/145369246-8c00ffa9-d208-4bd7-b5e8-638a211ee43b.gif)

## Description

Connect 4 is a turn-based game where two players take turns dropping colored balls from the top into a column. The ball will fall straight down towards the next available space within the column. The aim of each player is to be the first to form a vertical, horizontal, or diagonal line of four of one's own balls.
  
The purpose of this project is mainly to implement the algorithm and test its performance in a simple game.

## Algorithm for Game AI

We implemented an agent using a Monte Carlo Tree Search (MCTS) algorithm.
The idea behind this algorithm is to build a search tree of possible move sequences and simulates each one multiple times to determine the expected outcome.  (Instead of exploring all the possible games, only the most promising routes are chosen).

## Features

![Screen_Shot_2021-11-28_at_18 37 17](https://user-images.githubusercontent.com/66197642/144708572-30865c7d-7729-42ce-8ac9-b4f158bcd5d0.png)

We added an error handler so that each player will have a unique name and a different color ball than their opponent.

## Built With

* [React.js](https://reactjs.org/)
* [TailwindCSS](https://tailwindui.com/)







