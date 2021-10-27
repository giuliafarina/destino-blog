import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './hero.module.css'
import Checkout from './checkout'

const Hero = ({ title, content }) => (
  <><div className={styles.hero}>
    {/* {image && (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )} */}
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && <p className={styles.content}>{content}</p>}
    </div>
  </div>
    <Checkout /></>
)

export default Hero
