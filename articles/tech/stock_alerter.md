---
category: "Tech"
filename: "stock_alerter"
title: "Stock Alerter"
image: "stockPreview.png"
snippet: "My intended goal with this project was to create a web application to be able to track stock prices throughout the day and alert the user when an alert's conditions were met. This idea arose because when I first began investing I was always watching stocks and was glued to my screen. Though the stock would move up and down throughout the day, it would usually end right where it started. I was wasting a lot of time and only wanted to know when it moves past a certain threshold. With that thought, I decided to build Stock Alerter"
date: "May 14, 2022"
readTime: "5.5"
tags: "stocks, finnhub websocket, fmp api, nextauth, marketaux api, chartjs"
---

#### ![Portfolio](/images/tech/stockPreview.png)

### Goal

My intended goal with this project was to create a web application to be able to track stock prices throughout the day and alert the user when an alert's conditions were met. This idea arose because when I first began investing I was always watching stocks and was glued to my screen. Though the stock would move up and down throughout the day, it would usually end right where it started. I was wasting a lot of time and only wanted to know when it moves past a certain threshold. With that thought, I decided to build Stock Alerter. 

### Process

This project was actually in the works several months ago and was one of the first projects I had ever worked on. I had just finished learning about React and there were several things I wanted to implement features including a search bar, a day/night mode, and audio for when a stock alert was triggered. While I successfully implemented these features after some trial and error, I ultimately decided to put this project on hold and learn more about server-side code when I came to the realization I could not hide any of my API credentials through React alone. Months later, I came back and looked at the poor choice of color palette I had chosen and how the site looked outdated.

#### ![oldSite](/images/tech/oldStockPreview.png)

At this point, I had worked on other projects, picked up NextJS, and learned more about designing a site and code organization. When I reopened my project and saw every file in the components folder with the CSS for every file in a global stylesheet I thought it better to just restart the project. 

This time around, with NextJS's pages functionality, I decided to make the application multipage. Unlike the first iteration, I wanted a clear navigation bar. The only issue was I wasn't sure what all the tabs would be. I came up with the idea to have an about page that explained the application and a page to search for news on a stock. To be honest, with the limited amount of articles I could fetch from the news API I found, the news page was more for show than functionality. The navigation bar looked empty with just the three options and I thought what if I added a logout feature. Finnhub's WebSocket only allowed for one connection at a time per API so I thought making a user need to authenticate before using it would lower the chances of someone having it open. 

The about page was composed of components filled with text and the news page displayed three articles fetched by the news API, Market Aux. Unlike my blog, I used getServerSideProps for the news page as well as for the home page as the information changed fast and the freshest data was needed. This would also allow me to hide my API keys. As for the home page or dashboard, I started the user off by viewing an empty watch list and empty notification menu. For the user to get started, they would have to search up specific stocks and add them to their watch list. From there they were able to set a notification for a specific stock if they so chose. 

On the specific stock page, I used ChartJS to display the information and also mapped out more detailed information about the stock such as market cap, volume, etc. in case the user wanted to use those as metrics to determine whether or not to add a stock to their watchlist. When a user enables notifications for a certain stock and set an alert they would be able to see on their dashboard the live price of that stock if the market was open. The user has the option to check whether the live price is below or above the price they had set. When the live price crosses the threshold the user set that stock would blink red. 

For the login page, I utilized react hook forms because it has built in form validation configuration. I created a single username and password on MongoDB as I was hoping only one person would use the application at a time given the WebSocket constraints. From there, I utilized NextAuth and wrapped its provider around my application. As every page was fetched from the server every time it was visited, I used NextAuth's getSession function to check if the user was authenticated on every new page they visited. 

### Difficulties

I struggled immensely working on this project. I had just finished a React basics tutorial and just jumped right into the project. Basics such as figuring out how to map arrays into HTML elements and why they needed keys, how state worked in the React lifecycle, using asynchronoous functions (setTimeout, setInterval, fetch, etc.), using the Context API, and the list goes on, these all served as hurdles when I first began coding the project months ago. It was a lot of research coupled with trial and error that got me through the first iteration of the project. When I thought I was almost done I found out I made the novice mistake of not knowing I had to hide my API keys. This was the catalyst for me to learn NextJS, so I could implement the data fetching server side. 

When I came back to the project, I struggled with far fewer things but the issues that remained were working with the WebSocket and sorting through the nested stock data from the APIs. There was so much data everything just felt like a blur. 

### What I Learned

Aside from solving the earlier issues I had, I have a much more concrete understanding of React than when I first began. I learned state to be asynchronous and to mutate anything in a copy of the previous state. I learned the state hook can take a callback and can store the previous state as a parameter. I learned about the Context API, useEffect dependencies, and refs.

As I was coding other projects in the time between the first and second iteration of this project, I realized the deeply nested data I worked with on this project made any nested data I worked with seem shallow. I better understand how WebSockets operate, I've become familiar with more window methods, and I dipped my toes into authentication learning about JWTs and session cookies. 

### Concluding Thoughts

It feels like a huge accomplishment finishing this project. A circle from when I first started coding to everything I've accumulated now. I'll always be able to use it as a personal tool even the day it comes off my resume and portfolio and it has cemented my understanding of React, CSS, and Javascript. 
