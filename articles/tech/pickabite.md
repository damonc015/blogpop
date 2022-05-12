---
category: "Tech"
filename: "pickabite"
title: "Pick a Bite"
image: "gmapsPreview.png"
snippet: "The process of creating an application utilizing the Google Maps API. My intended goal with this project was to create an unconventional showcase of my work. Inspired by Bruno Simon's famous ThreeJS portfolio, I knew I wanted to create a portfolio that didn't look like a traditional website. I wanted to create an interactive experience for whoever visited my site."
date: "March 3, 2022"
readTime: "5.3"
tags: "Google Maps API, SwiperJS, Google Maps, Pick a Bite, food, restaurants"
---

#### ![Gmaps](/images/tech/gmapsPreview.png)

### Goal

When coming up with personal project ideas, I wanted to create projects that I was passionate about. Early on I had decided to create a food application as one of my interest is trying out new recipes. Another thing I wanted to accomplish was implementing a document heavy API. The first one that came to mind was the Google Maps API. A few months ago I had taken a look at the documentation and I honestly had no idea where to begin compared to other APIs I was using at the time. Often I would just make a fetch request and all the information would be received as an object. But Google's APIs were different. They required setup, they required research, and they required deciphering. This time around I was up for the challenge. With this application I wanted to find restaurants in an area. I wanted to create an application to solve indecision when it came to picking out food. I envisioned being hungry and having my meal be chosen by unveiling options like scratching a scratch card. And with that idea in mind, I opened the API docs to begin.

### Process

The first thing I wanted to do was bring up the map from the API. Up until this point I used simple APIs to grab sets of data. Make a fetch request and an object with all the data would return. Immediately, I noticed that Google had multiple APIs that returned countless options depending on the query. Unlike other APIs I had to sift through the mass amount of documentation to find which APIs I needed. Even the Google Maps API was an umbrella concept for smaller APIs within it. Eventually I managed to find what I needed, the Places API, the Maps API, and the Geocoding API. The Maps API was to be able to use the functionalities of the Google map including the zoom, the template, and controls. The Geocoding API would be used to convert between latitudes and longitudes found on the map into the actual address. This address would then be used with the Places API to get details on the location.

Once I was able to render the map and the autocomplete search from Google onto the page, I disabled landmarks and adjusted the map style. Since this application used the Maps API, I wanted the map to take a large section of the viewport. I decided on making it roughly 60% while leaving the other half for the user to see their options. Even if the screen size was too small I still wanted to user to be able to see the map so for the mobile view I made the menu almost the entire screen but collapsable so the user could still see the map if they wanted to.

The Places API returned up to 20 locations based on the inputted address that was being converted by the Geocoding API. Of those 20, 3 would randomly be selected and displayed. I wanted the user to be in suspense and not be able to see the results right away so each option returned a veiled object that required the user to click to unveil it. Each option when revealed would show images of the location, ratings, and reviews. These were fetched using the Places Detail portion of the Places API. In order to show all the photos I decided to have them on a carousel. I used SwiperJS for this. 

### Difficulties

The most difficult part about this project had to be deciphering the documentation for the API

### What I Learned

next config file image domains

### Concluding Thoughts

While I strived to make every page different in arrangement, I think if I came back to this project I could turn it into something greater. Overall though, I am proud that it does convey the interactive experience I had intended and I think the centerpiece for the home page was a great success.
