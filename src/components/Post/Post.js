// @flow strict
import React from 'react'
import { Link } from 'gatsby'
import Author from './Author'
import Comments from './Comments'
import Content from './Content'
import Meta from './Meta'
import Tags from './Tags'
import ShareButtons from './ShareButtons'
import styles from './Post.module.scss'
import type { Node } from '../../types'

type Props = {
  post: Node
}

const Post = ({ post, site }: Props) => {
  const { html } = post
  const { tagSlugs, slug } = post.fields
  const { tags, title, date } = post.frontmatter
  const array = []
  tagSlugs.forEach(item => {
    array.push(item.substring(5, item.length - 1))
  })

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/">
        全ての記事
      </Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <h3>シェアお願いします！</h3>
        <ShareButtons
          tags={array}
          url={site.domain + slug}
          twitterHandle={site.twitterHandle}
          title={title}
        />
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  )
}

export default Post
