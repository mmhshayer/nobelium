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
              className={`mr-2 mb-2 font-medium border rounded-xl whitespace-nowrap dark:text-gray-300`}
            >
              <Link
                key={key}
                href={selected ? '/search' : `/tag/${encodeURIComponent(key)}`}
                className={`block p-2 rounded-xl hover:bg-gray-500 dark:hover:bg-gray-500 dark:hover:text-white ${selected
                  ? 'text-white bg-black border-black dark:bg-gray-800 dark:border-gray-800'
                  : 'bg-gray-100 border-gray-100 text-gray-400 dark:bg-night dark:border-gray-800'
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
