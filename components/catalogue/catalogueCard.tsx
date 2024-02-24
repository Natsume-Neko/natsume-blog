
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
    <div className="flex flex-col pb-[45px]">
      <h1 className="text-2xl font-bold hover:text-gray-300 pb-5 border-b border-b-gray-700">
        <a href={'/posts/' + slug}>{title}</a>
      </h1>
      <p className="text-sm italic pt-5">{description}</p>
    </div>
  )
}