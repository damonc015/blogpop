---
category: "Tech"
filename: "portfolio"
title: "Portfolio"
image: "portPreview.png"
snippet: "The process of creating my portfolio. My intended goal with this project was to create an unconventional showcase of my work. Inspired by Bruno Simon's famous ThreeJS portfolio, I knew I wanted to create a portfolio that didn't look like a traditional website. I wanted to create an interactive experience for whoever visited my site."
date: "May 3, 2022"
readTime: "5.3"
tags: "portfolio, gsap, intersection observer"
---

#### ![Portfolio](/images/tech/portPreview.png)

### Goal

My intended goal with this project was to create an unconventional showcase of my work. Inspired by Bruno Simon's famous ThreeJS portfolio, I knew I wanted to create a portfolio that didn't look like a traditional website. I wanted to create an interactive experience for whoever visited my site.

### Process

As I looked into ThreeJS, the ideas I had in mind slowly dissipated as the realization dawned on me that using ThreeJS was more than picking up a library. I would need custom models for my ideas which would require learning the basics of 3D modeling. I decided on setting my prospects for a ThreeJS based portfolio aside for the time being and instead focus on creating an interactive experience with animation libraries like GSAP instead. I started by creating the sections of my page and was going to use snap align in CSS to make it so users had to focus on a section of the page. But as I tested it, I felt snap align was clunky and I wanted users to have the freedom to scroll and land in between the pages.

As I learned GSAP, the social icons were the first thing I animated with GSAP. After I created the showcase and contact page. The content for the showcase page was filled by my projects and the contact page only included a form so there was limited room for me to apply something creative. I applied a few animations but other than that they were left alone.

The centerpiece was the home page. This was where I wanted users to have an interactive experience. I scraped the navigation bar I made and created a roadmap. Normally, websites may have a "back to top" button, but I thought what if users could travel along with the page with this roadmap instead. I thought it was a fun addition but thought about how the pages would be represented. If they were just words, it would be no different than a vertical navigation bar. They could be represented by icons but the icons should fit a theme. The theme of a website dictates the color palette, the decor, the spacing, and even the font.

#### ![Roadmap](/images/tech/roadmap.png)

After mulling over ideas, I decided on making it urban-themed to represent the fact that I am based in NY. I thought "What icon could represent the city?" It was a roadmap so what mode of transportation represented that better than a taxi (I suppose maybe a train but let's go with taxi). I decided to track the active part of the page with a state variable and put an on click on the icons to set the active part of the page. And on state change the page would scroll to the active page. But I realized the roadmap only reflected the active part of the page when clicking on the icon. What if the user manually scrolled to the next section? From a previous project, I knew I could track when an element was in view using the Intersection Observer API. When the user scrolled, the observer would detect the element active and change the active part of the page to that element.

I decided to hide the roadmap on the initial visit. I wanted the user to focus on the centerpiece of the home page and experience the site in a somewhat sequential rather than skipping around with the roadmap right away. Something I wanted to avoid was the roadmap ambushing the user when it did appear, so I wanted my home page's centerpiece to lead up to the road map. The home page also needed a way to navigate to different parts of the page in the event in case the user did want to see only a specific part of the site. I wanted the user to be presented with a choice rather than giving them all the controls from the start. I came up with the idea of having the choices be taxis that would roll off-screen when chosen to allude to the roadmap later. I made SVGs for the taxis and city background and animated them to create the home page.

I wrapped up the project by finding a few SVGs to use as bullet points and wrote a description for the about page.

### Difficulties

I think what I struggled with the most was the creative aspect of the page. It took me a lot longer to come up with an entire theme, palette, and design as I wanted it to be unlike a traditional website. Another thing I struggled with was working with SVGs and understanding how their viewboxes operated. I had few technological difficulties with creating my portfolio. Creating a portfolio is a representation of the accumulated skills one has garnered after completing their projects. That was evident as every time I stumbled, I realized I had encountered a similar problem in the past. An example is when the Intersection Observer would trigger on every element so skipping around the site would have it trigger every element. I had created a site in the past that was also intended to be skipped around and to avoid having the observer trigger I would add a delay. Only when the page was settled on an element for a certain amount of time was the observer triggered. I simply translated this solution to React to resolve my issue.

```jsx
useEffect(() => {
  if (!inView) return;
  lastTimeout.current = setTimeout(() => {
    setActiveIcon("contact");
  }, 1000);
  return () => {
    clearTimeout(lastTimeout.current);
  };
}, [inView]);
```

### What I Learned

There were many "first timers" in this project. Though I had heard of GSAP and the Intersection Observer before, this was my first time using both of them. I thought GSAP was a phenomenal animation library and I thought the Intersection Observer was also incredibly useful. I learned how SVGs worked, animated SVG paths, and created my own for the first time in Figma. I also used EmailJS for the first time. This project enabled me to add many new tools to my repertoire.

### Concluding Thoughts

While I strived to make every page different in arrangement, I think if I came back to this project I could turn it into something greater. Overall though, I am proud that it does convey the interactive experience I had intended and I think the centerpiece for the home page was a great success.
