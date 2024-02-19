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
    <div className="flex justify-between w-full h-10 border-b border-b-gray-500">
      <h1>Natsume's Blog</h1>
      <div className="flex">
        {
          topbarLinkItems.map(({name, url}) => <TopbarLink name={name} url={url} currentOn={currentOn} />)
        }
      </div>
    </div>
  )
}