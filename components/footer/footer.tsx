import "github-markdown-css/github-markdown-dark.css"
import 'highlight.js/styles/github-dark.css'
import FooterContent from 'FooterContent.mdx'

interface FooterProps {
  date: string;
  tags: string;
}

export default function Footer({
  date,
  tags
}: FooterProps) {
  return (
    <div>
      <div className="markdown-body w-[1190px] p-[45px]">
        <FooterContent date={date} tags={tags} />
      </div>
    </div>
  )
}