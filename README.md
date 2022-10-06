# StockUp
StockUp is a fully functional design and working UI implementation based on [Apollo](https://www.withapollo.com/), an early-stage startup from Y Combinator's Summer 2021 cohort. StockUp simulates the interface and experience interacting with a digital debit card that earns you shares of stock for purchases made. Created as the final project of CS 422 (User Interface Design and Programming, Spring 2022) at the University of Illinois at Chicago, this working UI implementation is the culmination of our team's research throughout the semester, utilizing methods learned in the course, to develop an interface that exemplifies a positive user experience. Developed using React Native.

## Table of contents
* [General Info](#general-info)
* [Getting Started](#getting-started)
* [Project Requirements](#project-requirements)
* [Technologies](#technologies)
* [Credits](#credits)
* [Live Demo](#live-demo)

## General info
This project is the final project for CS 422 (User Interface Design and Programming) at the University of Illinois at Chicago, Spring 2022. We were put into student groups of 3 or 4 members working as designers to design an interface for an emerging startup of our choice. We were required to follow the design process covered in the course to understand user needs, generate design ideas, refine our design ideas to generate an interactive high-fidelity prototype, build a working UI implementation of our prototype, and conduct user testing. The final day of the course included a public showcasing event which was attended by members of the UIC community.

## Getting Started
Before you begin, please make sure you have **Node.js**, **React**, and **Expo** installed, and ensure that you are running Node version >= 14.0.0 and npm version >= 5.6.0. Links to Node.js are provided below:
* Windows: https://nodejs.org/dist/v16.17.1/node-v16.17.1-x86.msi
* Mac: https://nodejs.org/dist/v16.17.1/node-v16.17.1.pkg
* Linux: https://nodejs.org/dist/v16.17.1/node-v16.17.1-linux-x64.tar.xz

Information about setting up the React Native and Expo environments are here:
* [React Native](https://reactnative.dev/docs/environment-setup)
* [Expo](https://docs.expo.dev/get-started/installation/)

You can check your version of Node and npm in your terminal using the following commands:

 
`node --version`


`npm --version`

Once Node is installed you can run the command
`npm install -g expo-cli`
within your terminal to install Expo. 

Once the development environment has been set up, download and navigate to the project folder within your terminal and run with `npm start`. You can chose to view the application on a web browser (press "w"), using Android or iOS simulators (press "a" or "i"), or using your physical mobile device using the Expo Go app (scan the QR code in the terminal using Expo Go on Android or with the default Camera app on iOS). On launch, you should be welcomed by the **Login** screen: 

<p align="middle">
    <img src="https://github.com/hgavil/StockUp/blob/master/images/login.png" width=60% height=60%>
</p>

As StockUp is mainly a *front-end implementation*, no login or registration information is actually needed as input, so feel free to simply login and play around with the app. The **Login** and **Register** screens will eventually lead to the **Home** screen, where the user is greeted with a welcome message and is able to check at a glance their balances in various accounts. The first account listed is meant to replicate the Apollo debit card, and the second is meant to replicate a potential savings account. Clicking on each account button will take you to its corresponding **Account** screen, showing the transaction history and rewards of stock earned by using the card.

<p float="left">
    <img src="https://github.com/hgavil/StockUp/blob/master/images/home.png" width=49% height=49%>
    <img src="https://github.com/hgavil/StockUp/blob/master/images/account.png" width=49% height=49%>
</p>

The **Portfolio** screen, accessible by the tab navigator at the bottom, displays an overview of the rewards of stock the user has earned. An arbitrary graph displays the portfolio value over time with the total balance of the portfolio just below. Earned stocks are shown in pressable buttons, with ticker values indicating direction for the day and the balance of that stock to the right.

Pressing on an individual stock button brings about the **Stock** screen, which displays a graph of that stock's movement over time, the total balance of that stock the user has earned, and various information about that stock just below. The user is also able to sell shares of stock (similar to cashing out on rewards) by pressing the "Sell" button in the top right corner. A dialog box will then prompt the user for the amount of shares to sell, and simultaneously displays a live conversion of that share amount in USD. When the user sells stock, the amount of shares and balance of that stock on that stock's screen is updated, as well as the portfolio balance and that stock's balance on the Portfolio screen.

<p float="left">
    <img src="https://github.com/hgavil/StockUp/blob/master/images/portfolio.png" width=32% height=32%>
    <img src="https://github.com/hgavil/StockUp/blob/master/images/stock.png" width=32% height=32%>
    <img src="https://github.com/hgavil/StockUp/blob/master/images/sellStock.png" width=32% height=32%>
</p>

The **Settings** screen is also accessible by the tab navigator at the bottom, and is initially collapsed and displays the username of the user as well as a Log out button underneath. Pressing the chevrons next to the three different type of settings subtitles reveals options that can be set for the app, which can then be enabled/disabled or changed for preference. Pressing the Log out button will log the user out of the app.

<p float="left">
    <img src="https://github.com/hgavil/StockUp/blob/master/images/settings1.png" width=49% height=49%>
    <img src="https://github.com/hgavil/StockUp/blob/master/images/settings2.png" width=49% height=49%>
</p>

## Project Requirements
* Pick a startup that has articulated a problem that it's trying to solve.
    * Ignore any interfaces they’ve built already.
    * Come up with your own solution and design using only their problem description.
* Create a 6-minute proposal idea video.
* Create a discussion guide based on the focus setting.
    * Your group will use this during user research.
* Conduct focus groups and interviews.
    * Recruit and conduct one or more focus groups.
    * Each focus group should have at least 3 users from your target population.
    * Conducting one-on-one interviews is recommended but not required.
    * Should talk to 6 to 8 target users total for both focus groups and interviews.
* Walk the data using affinity diagramming to analyze the results of focus groups/interviews.
    * Identify the main user needs that seem to be emerging.
    * Identifty users’ goals, priorities, preferences, and experiences.
* Create 2-3 personas.
* Create task flow(s) and wireframe(s) for your initial app design.
* Create an interactive pixel-perfect prototype.
    * Prototype should contain every possible transition and feature that is included in your design.
    * No non-functional interface elements should be present.
    * [Click here](https://projects.invisionapp.com/share/QV12KQUY2TZ7#/screens) to see our prototype!
* Create a 5-slide presentation and prepare a demo script highlighting 3 key features.
* Create a working UI with a fully functional front-end and live user interactions.
    * Your implementation should not have a server-side component.
    * Your application should not have its own backend (Django, Rails, or MySQL).
* Create a video sketch, poster, and complete the design documentation paper.
* Present your project at the final showcasing in front of a live audience of UIC guests.

    
## Technologies
Project is created with:
* React version 17.0.1
* React Native version 0.07.2
* Node.js version 16.15.0
* npm version 8.3.1

## Credits
* **Login:** [Diana Villanueva](https://github.com/dvilla55), [Moody Samkary](https://github.com/MoodyAmroSamkary)
* **Register:** [Diana Villaneuva](https://github.com/dvilla55)
* **Home:** [Hannah Gavilan](https://github.com/hgavil)
* **Accounts:** [Hannah Gavilan](https://github.com/hgavil), [Abel Abraham](https://github.com/Abelaj50)
* **Portfolio:** [Abel Abraham](https://github.com/Abelaj50)
* **Stocks:** [Abel Abraham](https://github.com/Abelaj50)
* **Settings:** [Moody Samkary](https://github.com/MoodyAmroSamkary)

All credits to technologies used are given to their owners and all items specified in their respective licenses are adhered to throughout this project. Credits to:
* [mmazzarolo](https://github.com/mmazzarolo/react-native-dialog.git) for the react-native-dialog library.
* [Freepik](https://www.flaticon.com/free-icon/house-outline_25794?term=home&page=1&position=36&page=1&position=36&related_id=25794&origin=style) for the Home icon.
* [Dimitry Miroliubov](https://www.flaticon.com/free-icon/briefcase_639394?term=portfolio&page=1&position=1&page=1&position=1&related_id=639394&origin=style) for the Portfolio icon.
* [Gregor Cesnar Premium](https://www.flaticon.com/free-icon/settings_563541?term=settings&page=1&position=1&page=1&position=1&related_id=563541&origin=style) for the Settings icon.

Special thanks to Professor Nikita Soni and our TA Hasti Sharifi for bringing us together to work on this project and all their oversight and guidance! We had a lot of fun working together. 

## Live Demo
The following link leads to a live demonstration of the project.
* https://snack.expo.dev/@abelaj50/8892a2?platform=ios

