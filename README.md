<h1 align="center">
  Connect 4
  <br>
</h1>

Connect 4 is a turn-based game where two players drop colored balls into columns, aiming to form a vertical, horizontal, or diagonal line of four balls. The balls fall to the next available space in the column.   
The goal of this project is to implement and test the game algorithm’s performance.

[日本語版 README はこちら](https://github.com/TeamE-React/connect-4/blob/main/README-ja.md)

## Demo

![output4](https://user-images.githubusercontent.com/66197642/145369246-8c00ffa9-d208-4bd7-b5e8-638a211ee43b.gif)

## Algorithm for Game AI

We implemented an agent using the Monte Carlo Tree Search (MCTS) algorithm. This algorithm builds a search tree of potential move sequences, simulating each multiple times to predict outcomes. Instead of exploring all possible moves, it focuses on the most promising routes.


## Built With

| **Technology** | **Purpose**            |
|----------------|------------------------|
| **React**      | Frontend framework     |
| **Context API**| State management       |







