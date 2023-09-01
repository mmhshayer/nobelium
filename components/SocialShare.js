import { useConfig } from '@/lib/config'
import { Facebook, Linkedin, Reddit, Telegram, Twitter, Whatsapp, Ycombinator } from '@/svg';
import cn from 'classnames'

const SocialShare = ({ post }) => {
    const BLOG = useConfig();
    const shareButtonsConfig = BLOG.shareButtons

    const fullWidth = post.fullWidth ?? false
    const title = post.title ?? BLOG.title
    const pageurl = BLOG.link + '/' + post.slug

    if (post.type[0] === 'Page') return null

    return (
        <div className={cn(
            'px-4 flex justify-between my-5',
            fullWidth ? 'md:px-24' : 'mx-auto max-w-2xl'
        )}>
            {shareButtonsConfig.twitter && (
                <a
                    className='text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500'
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`share ${title} on twitter`}
                    href={`https://twitter.com/intent/tweet/?text=${title}&url=${pageurl}`}
                >
                    <Twitter height={28} width={28} />
                </a>
            )}
            {shareButtonsConfig.linkedin && (
                <a
                    className='text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500'
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`share ${title} on linkedin`}
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${pageurl}&title=${title}&summary=${title}&source=${pageurl}`}
                >
                    <Linkedin height={28} width={28} />
                </a>
            )}
            {shareButtonsConfig.reddit && (
                <a
                    className='text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500'
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`share ${title} on reddit`}
                    href={`https://reddit.com/submit?url=${pageurl}&title=${title}`}
                >
                    <Reddit height={28} width={28} />
                </a>
            )}
            {shareButtonsConfig.facebook && (
                <a
                    className='text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500'
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`share ${title} on facebook`}
                    href={`https://facebook.com/sharer/sharer.php?u=${pageurl}`}
                >
                    <Facebook height={28} width={28} />
                </a>
            )}
            {shareButtonsConfig.whatsapp && (
                <a
                    className='text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500'
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`share ${title} on whatsapp`}
                    href={`https://api.whatsapp.com/send?text=${title}%20-%20${pageurl}`}
                >
                    <Whatsapp height={28} width={28} />
                </a>
            )}
            {shareButtonsConfig.telegram && (
                <a
                    className='text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500'
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`share ${title} on telegram`}
                    href={`https://telegram.me/share/url?text=${title}&url=${pageurl}`}
                >
                    <Telegram height={28} width={28} />
                </a>
            )}
            {shareButtonsConfig.ycombinator && (
                <a
                    className='text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500'
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`share ${title} on ycombinator`}
                    href={`https://news.ycombinator.com/submitlink?t=${title}&u=${pageurl}`}
                >
                    <Ycombinator height={28} width={28} />
                </a>
            )}
        </div>
    )
}

export default SocialShare
