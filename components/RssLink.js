import Link from 'next/link'
import { Rss } from '@/svg'

const RssLink = () => {
    return (
        <Link
            href="/feed"
            target="_blank"
            aria-label="RSS"
        >
            <Rss height={28} width={28} className='text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500' />
        </Link>
    )
}


export default RssLink
