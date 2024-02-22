import Content from "../test.mdx"
import "github-markdown-css/github-markdown-dark.css"
import 'highlight.js/styles/github-dark.css'
export default function Page() {

  return (
    <div className="markdown-body max-w-[980px] p-[45px]">
      <Content />
    </div>
  );
}