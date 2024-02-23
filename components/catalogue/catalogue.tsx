import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import CatalogueCard from './catalogueCard';

export default function Catalogue() {
  
  const posts = getPostsMatters() as any;
  return (
    <div>
      {posts.map((post: any) => {
        return (
          <CatalogueCard
            slug={post.slug}
            title={post.title}
            description={post.description}
          />
        )
      })}
    </div>
  )
}


function getPostsMatters() {
  try {
    const postsDirectory = path.join(process.cwd(), 'app/posts');
    const dirNames = fs.readdirSync(postsDirectory);
    const posts = [];
    for (const dirName of dirNames) {
      const fullPath = path.join(postsDirectory, dirName);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        const fileNames = fs.readdirSync(fullPath);
        for (const fileName of fileNames) {
          if (fileName === 'page.mdx') {
            const fileContents = fs.readFileSync(path.join(fullPath, fileName), 'utf8');
            const matterResult = matter(fileContents);
            posts.push({
              ...matterResult.data,
              'slug': dirName
            });
          }
        }
      }
    }
    return posts;
  } catch (error) {
    console.error('Error in getPostsMatters: ', error);
  }
}