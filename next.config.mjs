import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import rehypeHighlight from 'rehype-highlight'
import remarkMath from 'remark-math'
import rehypeMathjax from 'rehype-mathjax'
import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx', 'md'],
  // Optionally, add any other Next.js config below
}
 
const withMDX = createMDX({
  // add mdx and md extensions to the list of extensions
  extension: /\.mdx?$/,
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkFrontmatter,
      remarkMath
    ],
    rehypePlugins: [
      rehypeHighlight,
      rehypeMathjax
    ],
  },
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)