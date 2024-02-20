import { topbarLinkItems } from "@/constants/topbarItems";
import TopbarLink from "./topbarLink";

interface TopbarProps {
  currentOn: string;
}

export default function Topbar({
  currentOn
}: TopbarProps
) {

  return (
    <div className="flex justify-between w-full h-10  z-50 bg-black border-b border-b-gray-500 fixed">
      <h1 className="text-3xl">夏目のBlog</h1>
      <div className="flex">
        {
          topbarLinkItems.map(({name, url}) => <TopbarLink name={name} url={url} currentOn={currentOn} />)
        }
      </div>
    </div>
  )
}