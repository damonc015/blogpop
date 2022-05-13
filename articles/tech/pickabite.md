---
category: "Tech"
filename: "pickabite"
title: "Pick a Bite"
image: "gmapsPreview.png"
snippet: "The process of creating an application utilizing the Google Maps API. When coming up with personal project ideas, I wanted to create projects that I was passionate about. Early on I had decided to create a food application as one of my interest is trying out new recipes. Another thing I wanted to accomplish was implementing a document heavy API. The first one that came to mind was the Google Maps API. A few months ago I had taken a look at the documentation and I honestly had no idea where to begin compared to other APIs I was using at the time. Often I would just make a fetch request and all the information would be received as an object. But Google's APIs were different. They required setup, they required research, and they required deciphering. This time around I was up for the challenge. With this application I wanted to find restaurants in an area. I wanted to create an application to solve indecision when it came to picking out food. I envisioned b
date: "March 3, 2022"
readTime: "5"
tags: "Google Maps API, SwiperJS, Google Maps, Pick a Bite, food, restaurants"
---

#### ![Gmaps](/images/tech/gmapsPreview.png)

### Goal

When coming up with personal project ideas, I wanted to create projects that I was passionate about. Early on I had decided to create a food application as one of my interest is trying out new recipes. Another thing I wanted to accomplish was implementing a document heavy API. The first one that came to mind was the Google Maps API. A few months ago I had taken a look at the documentation and I honestly had no idea where to begin compared to other APIs I was using at the time. Often I would just make a fetch request and all the information would be received as an object. But Google's APIs were different. They required setup, they required research, and they required deciphering. This time around I was up for the challenge. With this application I wanted to find restaurants in an area. I wanted to create an application to solve indecision when it came to picking out food. I envisioned being hungry and having my meal be chosen by unveiling options like scratching a scratch card. And with that idea in mind, I opened the API docs to begin.

### Process

The first thing I wanted to do was bring up the map from the API. Up until this point I used simple APIs to grab sets of data. Make a fetch request and an object with all the data would return. Immediately, I noticed that Google had multiple APIs that returned countless options depending on the query. Unlike other APIs I had to sift through the mass amount of documentation to find which APIs I needed. Even the Google Maps API was an umbrella concept for smaller APIs within it. Eventually I managed to find what I needed, the Places API, the Maps API, and the Geocoding API. The Maps API was to be able to use the functionalities of the Google map including the zoom, the template, and controls. The Geocoding API would be used to convert between latitudes and longitudes found on the map into the actual address. This address would then be used with the Places API to get details on the location.

Once I was able to render the map and the autocomplete search from Google onto the page, I disabled landmarks and adjusted the map style. Since this application used the Maps API, I wanted the map to take a large section of the viewport. I decided on making it roughly 60% while leaving the other half for the user to see their options. Even if the screen size was too small I still wanted to user to be able to see the map so for the mobile view I made the menu almost the entire screen but collapsable so the user could still see the map if they wanted to.

Next, when a location was selected, I wanted the user to see the area in which they were searching around. I added a marker and had the map zoom to this area as well as show pictures of the area. In order to show all the photos I decided to have them on a carousel. I used SwiperJS and inserted each image as its own slide.

The Places API returned up to 20 locations based on the inputted address that was being converted by the Geocoding API. Of those 20, 3 would randomly be selected and displayed. I wanted the user to be in suspense and not be able to see the results right away so each option returned a veiled object that required the user to click to unveil it. Each option when revealed would show images of the location, ratings, and reviews. These were fetched using the Places Detail portion of the Places API. The images were displayed in a similar fashion as the original location but it also showed its rating and had collapsable reviews as well as categorization.

All that was left to do was add a cover onto each object. I created a layer on top of the object and on click would remove the object.

### Difficulties

Two major hurdles I faced in this project was understanding the documentation and finding the services I needed as a React component. The documentation was extensive and layered. In order to find certain services, I would have to view branches on branches of different services. This took some time for me to understand but once I realized that was the case I was able to progress. 

The next issue I ran into was the sample code and instructions were in vanilla JavaScript. For each service I needed, I had to look for a third party package that condensed the code into a React componenet. The problem was there were multiple packages that did this and I had to experiment to see which ones were compatible with the ones I had already begun to use. I wounded up using react-google-maps alongside use-places-autocomplete but there were many other options out there.

### What I Learned

My ability to read dense documentation improved significantly from this project. I had spent a significant portion of time of this project on reading documentation alone. Never had I dedicated so much time to prepare for starting a project than I have with this one. Also, having to search for multiple third party packages had reminded me that there would always be multiple solutions to a problem and it was up to me to decide which decision to take.

I also learned about SwiperJS as a library. In my previous project, I created a carosuel myself but learning SwiperJS has allowed me to use it as a substitute. SwiperJS also delivers other formats other than a carousel  such as a panorama or shutter view that could be used in future projects.

### Concluding Thoughts

The centerpiece of this project was the map. When a location is searched a marker is shown. I would have loved to have added markers for every location revealed. However, the limitation of API calls did not allow for this and it felt the map lost a huge part of functionality. It meant the map would only be revealed for the initial location but I chose to keep it as the centerpiece. On the other hand, I loved how the potential restuarant choices came out. I think they came out playful and visually alluring. 
