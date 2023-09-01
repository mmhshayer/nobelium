import PropTypes from 'prop-types'
import cn from 'classnames'
import useTheme from '@/lib/theme'
import FormattedDate from '@/components/FormattedDate'
import TagItem from '@/components/TagItem'
import NotionRenderer from '@/components/NotionRenderer'
import TableOfContents from '@/components/TableOfContents'

/**
 * A post renderer
 *
 * @param {PostProps} props
 *
 * @typedef {object} PostProps
 * @prop {object}   post       - Post metadata
 * @prop {object}   blockMap   - Post block data
 * @prop {string}   emailHash  - Author email hash (for Gravatar)
 * @prop {boolean} [fullWidth] - Whether in full-width mode
 */
export default function Post (props) {
  const { post, blockMap, fullWidth = false } = props
  const { dark } = useTheme()

  const min_read = Math.ceil(post.words / 200)

  return (
    <article className={cn('flex flex-col', fullWidth ? 'md:px-24' : 'items-center')}>
      <h1 className={cn(
        'w-full font-bold text-3xl text-black dark:text-white',
        { 'max-w-2xl px-4': !fullWidth }
      )}>
        {post.title}
      </h1>
      {post.type[0] !== 'Page' && (
        <sup className={cn(
          'w-full mt-2 text-xs dark:text-gray-100',
          { 'max-w-2xl px-4': !fullWidth }
        )}>
          <FormattedDate date={post.date} />
          {post.words && ` • ${min_read} min`}
          {post.words && ` • ${post.words} words`}
          {post.author && ` • ${post.author}`}
        </sup>
      )}
      <p className={cn(
        'my-2 w-full text-gray-700 dark:text-gray-300',
        { 'max-w-2xl px-4': !fullWidth }
      )}>
        {post.summary}
      </p>
      <div className="self-stretch flex flex-col items-center lg:flex-row lg:items-stretch">
        {!fullWidth && <div className="flex-1 hidden lg:block" />}
        <div className={fullWidth ? 'flex-1 pr-4' : 'flex-none w-full max-w-2xl px-4'}>
          <NotionRenderer recordMap={blockMap} fullPage={false} darkMode={dark} />
        </div>
        <div className={cn('order-first lg:order-[unset] w-full lg:w-auto max-w-2xl lg:max-w-[unset] lg:min-w-[160px]', fullWidth ? 'flex-none' : 'flex-1')}>
          {/* `65px` is the height of expanded nav */}
          {/* TODO: Remove the magic number */}
          <TableOfContents blockMap={blockMap} className="pt-3 sticky" style={{ top: '65px' }} />
        </div>
      </div>
      {post.type[0] !== 'Page' && (
        <nav className={cn(
          'w-full flex my-7 items-start text-gray-500 dark:text-gray-400',
          { 'max-w-2xl px-4': !fullWidth }
        )}>
          {post.tags && (
            <div className="flex flex-nowrap max-w-full overflow-x-auto article-tags">
              {post.tags.map(tag => (
                <TagItem key={tag} tag={tag} />
              ))}
            </div>
          )}
        </nav>
      )}
    </article>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  blockMap: PropTypes.object.isRequired,
  fullWidth: PropTypes.bool
}
