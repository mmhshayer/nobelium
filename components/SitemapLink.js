import Link from 'next/link'
import { Sitemap } from '@/svg'

const SitemapLink = () => {
    return (
        <Link
            href="/sitemap"
            target="_blank"
            aria-label="Sitemap"
        >
            <Sitemap height={28} width={28} className='text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500' fill="currentColor" />
        </Link>
    )
}


export default SitemapLink
