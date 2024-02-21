import clsx from "clsx";

interface TopbarLinkProps {
  name: string;
  url: string;
  currentOn: string;
}


export default function TopbarLink({
  name,
  url,
  currentOn
}: TopbarLinkProps
) {
  const checkIsAtCurrentPage = () => {
    return currentOn === url;
  }


  return (
    <a href={url} className={clsx("p-2 rounded-md hover:text-gray-300", checkIsAtCurrentPage() && "bg-pink-400")}>{name}</a>
  )
}