---
category: "Tech"
filename: "blogsprite"
title: "Blogsprite"
image: "blogPreview.png"
snippet: "The process of creating my portfolio. My intended goal with this project was to create an unconventional showcase of my work. Inspired by Bruno Simon's famous ThreeJS portfolio, I knew I wanted to create a portfolio that didn't look like a traditional website. I wanted to create an interactive experience for whoever visited my site."
date: "March 30, 2022"
readTime: "5.3"
tags: "blog, next, markdown"
---

#### ![Portfolio](/images/tech/portPreview.png)

### Goal

My intended goal with this project was to create a site to explain the thought process behind my projects, share recipes I try, and talk about interesting lifestyle habits I discover. I wanted to create a ecommerce site layout utilizing NextJS. I always wanted to try an ecommerce layout but never found it appropriate for other projects. And while I could have created a project to do so, I struggled to find content to fill those pages. With a personal blog, I would be creating the content and could organize it any which way I chose, making this the perfect project to try my hand at this design.

### Process

I had the idea before I started, a large carousel that was the center of attention. It would rotate with highlighted articles and 

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
