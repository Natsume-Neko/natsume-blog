
interface CatalogueCardProps {
  slug: string;
  title: string;
  description: string;
}


export default function CatalogueCard({
  slug,
  title,
  description
}: CatalogueCardProps
) {
  return (
    <div className="flex flex-col pb-[45px] mb-10 border-b border-b-gray-700">
      <a href={'/posts/' + slug}>
        <h1 className="text-2xl font-bold mb-5 hover:text-gray-300">{title}</h1>
      </a>
      <p className="text-sm italic">{description}</p>
    </div>
  )
}