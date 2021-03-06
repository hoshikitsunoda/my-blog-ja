import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'
import styles from './ShareButtons.module.scss'

const fillColor = 'rgba(0, 0, 0, 0)'

export const ShareButtons = ({ twitterHandle, url, title, tags }) => (
  <div className={styles['social']}>
    <FacebookShareButton url={url} className={styles['social__button']}>
      <FacebookIcon bgStyle={{ fill: fillColor }} iconFillColor={'#3b5998'} />
    </FacebookShareButton>

    <TwitterShareButton
      url={url}
      title={title}
      via={twitterHandle}
      hashtags={tags}
      className={styles['social__button']}
    >
      <TwitterIcon bgStyle={{ fill: fillColor }} iconFillColor={'#1da1f2'} />
    </TwitterShareButton>

    <LinkedinShareButton url={url} className={styles['social__button']}>
      <LinkedinIcon bgStyle={{ fill: fillColor }} iconFillColor={'#0077b5'} />
    </LinkedinShareButton>

    <RedditShareButton
      url={url}
      title={title}
      className={styles['social__button']}
    >
      <RedditIcon bgStyle={{ fill: fillColor }} iconFillColor={'#ff4500'} />
    </RedditShareButton>

    <WhatsappShareButton
      url={url}
      title={title}
      className={styles['social__button']}
    >
      <WhatsappIcon bgStyle={{ fill: fillColor }} iconFillColor={'#128c7e'} />
    </WhatsappShareButton>
  </div>
)

export default ShareButtons
