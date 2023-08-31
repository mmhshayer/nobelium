import Link from 'next/link'

const TagItem = ({ tag }) => (
  <Link href={`/tag/${encodeURIComponent(tag)}`}>
    <p className="mr-2 rounded-full px-4 py-2 border leading-none text-sm dark:border-gray-400 hover:bg-gray-500 hover:text-black hover:border-none">
      {tag}
    </p>
  </Link>
)

export default TagItem
