import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const techArt = path.join(process.cwd(), "articles", "tech");
export const foodArt = path.join(process.cwd(), "articles", "food");
export const lifestyleArt = path.join(process.cwd(), "articles", "lifestyle");
const allArt = [techArt, foodArt, lifestyleArt];

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
export function readArticleNames(type) {
  const files = fs.readdirSync(type).map((file) => {
    return file.replace(/\.md$/, "");
  });

  return files;
}
export function readArticles(type) {
  const files = fs.readdirSync(type);
  const allFiles = files.map((file) => {
    return getArticleName(type, file);
  });

  const sortFiles = allFiles.sort((a, b) => (a.date > b.date ? -1 : 1));
  return sortFiles;
}

export function readTech() {
  return readArticles(techArt);
}
export function readFood() {
  return readArticles(foodArt);
}
export function readLife() {
  return readArticles(lifestyleArt);
}

export function readAllArticles() {
  return allArt.map((item) => {
    return readArticles(item);
  });
}


