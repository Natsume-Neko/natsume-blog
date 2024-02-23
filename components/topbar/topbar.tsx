import { topbarLinkItems } from "@/constants/topbarItems";
import TopbarLink from "./topbarLink";


export default function Topbar() {

  return (
    <div className="flex justify-center mt-20">
      <div className="w-[1190px] px-[45px]">
        <div className="flex flex-col pb-10 border-b-2 border-b-gray-500">
          <h1 className="text-3xl mb-5 font-bold">夏目のBlog</h1>
          <div className="flex justify-between h-10">
            <p className="text-sm font-thin font-mono">人生が難しい!</p>
            <div className="flex ml-5">
              {
                topbarLinkItems.map(({name, url}) => <TopbarLink name={name} url={url} />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}