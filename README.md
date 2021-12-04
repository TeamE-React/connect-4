# Connect 4

[日本語版 README はこちら](https://github.com/tkwonn/computer-builder/blob/main/README-ja.md)

## Description

![Select Page](https://user-images.githubusercontent.com/66197642/142282701-15155a1b-2521-47fc-80f0-cc6b00abc91d.png)
![Result Page](https://user-images.githubusercontent.com/66197642/142282330-75ac1d27-0f2a-4f95-bf24-35265731b85f.png)

1. In this app, users would select major parts of the computer to build their own computer.
2. It uses API to retrieve data in an asynchronous process. Depending on each component chosen by the user, it will calculate the specs of the computer and compare whether it is better for work or gaming.



## Features

* The results will not be displayed until the user has selected all the options.
* Depending on the option the user select, the subsequent choices will change.
* It can handle even if the user goes back and changes his/her past choices. That is, if the user changes his/her choice later, all the options involved will be reset and the user will be able to choose those options again.
* Once the user has selected everything and clicked on the Get Results button, a computer object is generated and displayed with the benchmark score.



## What I learned

* How to use API to get data by asynchronous processing.
* How to use JSON, Promise Object, and Lambda function.
* How to deal with complex state logic (managed with useContext and useReducer).



## Built With

* [React.js](https://reactjs.org/)
* [TailwindCSS](https://tailwindui.com/)



Project Link: [https://tkwonn.github.io/computer-builder/](https://tkwonn.github.io/computer-builder/)






