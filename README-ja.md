### Connect 4

[English README is here](https://github.com/TeamE-React/connect-4/blob/main/README.md)

## Demo

![output4](https://user-images.githubusercontent.com/66197642/145369246-8c00ffa9-d208-4bd7-b5e8-638a211ee43b.gif)

## Description

コネクト4は、2人のプレイヤーが交互に色のついたボールを上から列に落としていくターン制のゲームです。ボールはまっすぐ下に落ち、列の中の次の空きスペースに入ります。各プレイヤーの目的は、相手よりも早く自分のボールを４つ連続で縦、横、または斜めに揃えることです。
  
このプロジェクトの目的は、アルゴリズムを実装し、簡単なゲームでその性能をテストすることです。

## Algorithm for Game AI

私たちは、モンテカルロ木探索（MCTS）アルゴリズムを用いてAI対戦を実装しました。このアルゴリズムの背景にある考え方は、可能な手の検索ツリーを構築し、それぞれを複数回シミュレートして期待される結果を決定するというものです。つまり、すべての可能なゲームを探索するのではなく、最も有望なルートのみを選択するという事が可能になります。


## Features

![Screen_Shot_2021-11-28_at_18 37 17](https://user-images.githubusercontent.com/66197642/144708572-30865c7d-7729-42ce-8ac9-b4f158bcd5d0.png)

各プレイヤーがそれぞれユニークな名前と相手とは異なる色のボールを設定するようエラー判定を行いました。


## Built With

* [Next.js](https://nextjs.org/)
* [Material UI](https://mui.com/)

