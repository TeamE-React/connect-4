# Computer Builder

[English README is here](https://github.com/tkwonn/computer-builder/blob/main/README.md)

## Description

![Select Page](https://user-images.githubusercontent.com/66197642/142282701-15155a1b-2521-47fc-80f0-cc6b00abc91d.png)
![Result Page](https://user-images.githubusercontent.com/66197642/142282330-75ac1d27-0f2a-4f95-bf24-35265731b85f.png)

1. このアプリでは、ユーザーはCPU, GPU, RAM, Storageなどのコンピュータの主要な部品を選択して、自分のコンピュータを作ります。
2. APIを使用して、非同期処理でデータを取得しています。ユーザーが選択した各パーツに応じて、コンピュータのスペックを計算し、仕事に適しているか、ゲームに適しているかを比較します。

## Features

* ユーザーがすべての選択肢を選択するまで、結果は表示されません。
* ユーザーが選択した選択肢によって、その後の選択肢が変わります。
* ユーザーが過去にさかのぼって選択肢を変更しても対応できます。つまり、ユーザーが後から選択を変更した場合、関連するすべてのオプションがリセットされ、ユーザーは再びそれらのオプションを選択できるようになります。
* ユーザーがすべてを選択して「Get Results」ボタンをクリックすると、コンピュータ・オブジェクトが生成され、ベンチマーク・スコアとともに表示されます。

## What I learned

* JSONの扱いとPromiseオブジェクトの扱い
* ラムダ関数の使い方
* 前の値によって次の値が決まるといった複雑なステートの管理方法

## Built With

* [React.js](https://reactjs.org/)
* [TailwindCSS](https://tailwindui.com/)



Project Link: [https://tkwonn.github.io/computer-builder/](https://tkwonn.github.io/computer-builder/)

