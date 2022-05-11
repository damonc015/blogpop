---
category: "Tech"
filename: "blogsprite"
title: "Blogsprite"
image: "blogPreview.png"
snippet: "The process of creating my blog. My intended goal with this project was to create a site to explain the thought process behind my projects, share recipes I try, and talk about interesting lifestyle habits I discover. I wanted to create an e-commerce site layout utilizing NextJS. I always wanted to try an e-commerce layout but never found it appropriate for other projects. And while I could have created a project to do so, I struggled to find content to fill those pages. With a personal blog, I would be creating the content and could organize it any which way I chose, making this the perfect project to try my hand at this design."
date: "February 2, 2022"
readTime: "6.4"
tags: "blog, next, markdown"
---

#### ![Blog](/images/tech/blogPreview.png)

### Goal

My intended goal with this project was to create a site to explain the thought process behind my projects, share recipes I try, and talk about interesting lifestyle habits I discover. I wanted to create an e-commerce site layout utilizing NextJS. I always wanted to try an e-commerce layout but never found it appropriate for other projects. And while I could have created a project to do so, I struggled to find content to fill those pages. With a personal blog, I would be creating the content and could organize it any which way I chose, making this the perfect project to try my hand at this design.

### Process

To start, I wanted to create a larger centerpiece for the page. I wanted to create a carousel for the articles I wanted to highlight, similar to a clothing site showing what it had on sale. While I knew I could have downloaded a third-party module to create the carousel, I decided to make my own. The carousel was made with a container, four divs that rotated within the container, and two buttons to change its position. I also wanted it to rotate every few seconds. In order to do that, I set a state variable to keep track of its position and a timeout in a use effect hook to change its position.

```jsx
const [positionStart, setPositionStart] = useState(0);

function increasePosition() {
  if (positionStart === 3) return setPositionStart((prev) => 0);
  return setPositionStart((prev) => prev + 1);
}
function decreasePosition() {
  if (positionStart === 0) return setPositionStart((prev) => 3);
  return setPositionStart((prev) => prev - 1);
}

useEffect(() => {
  let timer = setInterval(increasePosition, 8000);
  return () => {
    clearInterval(timer);
  };
}, [positionStart]);
```

Each position had its own CSS class and I assigned each component its position by using an index of the array. The components would have their positions increment until they exceeded the length of the array and reset to index 0 of the array.

```jsx
const arrPositions = [
  classes.modalItemStart,
  classes.modalItemQuarter,
  classes.modalItemHalf,
  classes.modalItemThreeQuarter,
];

function arrIndex(i) {
  let temp = positionStart + i;
  if (temp > 3) temp -= 4;
  return arrPositions[temp];
}
```

To finish the landing page I added strips of article displays, each strip being a different category. To reiterate, I envisioned an e-commerce style site, normally such sites would have strips of different product categories. Skipping the CSS and navigation bar, the landing page was essentially done. The only other part I'd like to touch on was fetching the articles I wrote. Seeing as I did not have many articles written at the time, I had opted to write them in markdown files locally for the time being. To pass the articles up the landing page with NextJS's getStaticProps, I utilized gray matter to convert the markdown content into an object.

```jsx
export function getArticleName(type, name) {
  const slug = name.replace(/\.md$/, "");
  const articlePath = path.join(type, `${slug}.md`);
  const fileContent = fs.readFileSync(articlePath, "utf-8");
  const { data, content } = matter(fileContent);

  const articleData = {
    slug,
    ...data,
    content,
  };

  return articleData;
}
```

To get the files from a single category I created a function that upon inputting the type of articles, would map through that folder and perform the previous function on each file returning an array of objects sorted by date.

```jsx
export function readArticles(type) {
  const files = fs.readdirSync(type);
  const allFiles = files.map((file) => {
    return getArticleName(type, file);
  });

  const sortFiles = allFiles.sort((a, b) => (a.date > b.date ? -1 : 1));
  return sortFiles;
}
```

For the home page, however, it would need to display every category so I created a function that read every category as well by mapping every category into the function.

```jsx
export function readAllArticles() {
  return allArt.map((item) => {
    return readArticles(item);
  });
}
```
I wanted to take an advantage of NextJS's ability to create routes with the file system so I also created individual category pages to view all articles from that category. That is also why I created the function that accepted a category type and read only the files from that category. As there was a set number of categories I set fallback paths to false and only created paths for those categories. As I was sending the read files in chronological order, I thought it would be easy to implement a date filter to reverse the array of articles. 

Each article also had its own preset path. I had another function that read the filenames of the articles and remove their "md" extension and attached the result to the end of their category path. In order to render the data, I used React Markdown to convert the object into a JSX component. I used the function that only returned individual articles to receive the data for each article to avoid loading more files than needed. I also added SEO optimizations by adding snippets and tags in my markdown file headers. That way I could add each file's snippets and tags to their page's meta tags.  

### Difficulties

I had very limited backend knowledge coming into this project. I had learned a little of Node and Express but had never worked on anything with them. Understanding what to do with the file systems and how to read the files and convert them into the frontend was my biggest challenge with this project. After some research, I was able to use gray matter to turn my strings into objects that could be sent into the frontend. At that point, the text was still a large value to a key in an object. There I faced another wall as I wasn't sure if that was the extent of what I could do. Luckily I found React Markdown enabling me to break down that text and I simply styled the parent to access its children. 

It also took me some time to understand when to use Next's getStaticProps or getServerSideProps. I often second-guessed whether or not the information should be server side rendered or statically rendered. Ultimately, I decided as the info wasn't going to be updated too often to stick with statically rendered.

### What I Learned

This project opened up the whole can of worms of NextJS to me. I originally picked it up to try to hide my API keys in a backend but it offered much MUCh more than that. Its dynamic routing astonished me and just seemed to blow React router out of the water for me. In comparison to React router, it was much faster and simpler and I was glad I didn't have to create a router and configure a bunch of routes to do the same thing in the fs in Next! I also learned all about how web pages could be rendered and I feel like the world of the web just became that much clearer. Other aspects of Next such as image optimization and SEO optimization also reinforced this clarity of the web and I feel more confident as a frontend developer after this project. 

Learning Next also exposed me to more of the backend and I enjoyed learning about how to utilize the file system with Node and look forward to learning more about what I can do with the backend. 

Lastly, a more trivial learning experience. I had never known what a markdown file was before this project. It had never occurred to me that the README.md files of repos had this extension for a reason. But after learning about why markdown files are used it all makes sense now.

### Concluding Thoughts

It's nice to have a space to store my thoughts and talk about my projects. I'm happy with the way the design of the blog came out and think the carousel came out great. Moving forward, I think if the number of articles does increase substantially I will move my articles from being local onto a database and integrate more ways to sort including a search. But for the time being, with the limited number of articles, I think I will stick to having my articles be local.  
