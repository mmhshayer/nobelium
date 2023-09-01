import Link from 'next/link'

const TagItem = ({ tag }) => (
  <Link href={`/tag/${encodeURIComponent(tag)}`}>
    <p className="mr-2 rounded-full px-4 py-2 text-sm border border-gray-400 hover:bg-gray-500 hover:text-white dark:hover:border-gray-500">
      {tag}
    </p>
  </Link>
)

export default TagItem
