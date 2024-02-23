
interface TopbarLinkProps {
  name: string;
  url: string;
}


export default function TopbarLink({
  name,
  url,
}: TopbarLinkProps
) {
  return (
    <div>
      <a href={url} className='p-2 rounded-md hover:text-gray-300'>{name}</a>
    </div>
  )
}