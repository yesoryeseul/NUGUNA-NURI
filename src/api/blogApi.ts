import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import type { IBlog } from '@/types';

const postsDirectory = path.join('__blog');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const blogPost: IBlog = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      content: matterResult.data.content,
      img: matterResult.data.img,
      view: matterResult.data.view,
      like: matterResult.data.like,
    };

    return blogPost;
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
