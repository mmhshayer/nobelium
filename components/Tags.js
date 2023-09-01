import Link from 'next/link'

const Tags = ({ tags, currentTag }) => {
  if (!tags) return null
  return (
    <ul className="flex max-w-full mt-6 flex-wrap">
      {Object.keys(tags).map(key => {
          const selected = key === currentTag
          return (
            <li
              key={key}
              className={`mr-2 mb-2 font-medium border rounded-xl whitespace-nowrap text-gray-300`}
            >
              <Link
                key={key}
                href={selected ? '/search' : `/tag/${encodeURIComponent(key)}`}
                className={`block p-2 rounded-xl border-gray-500 hover:bg-gray-500 hover:text-white ${selected
                  ? 'bg-gray-500 dark:bg-gray-500'
                  : null
                  }`}
              >
                {`${key} (${tags[key]})`}
              </Link>
            </li>
          )
        })}
    </ul>
  )
}

export default Tags
