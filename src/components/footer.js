import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      <p>Sign up for my Newsletter <a href="https://mailchi.mp/3ea47faf06e0/h1rtvyb3sz">here</a></p>
      Built with <a href="https://contentful.com/">Contentful</a> and{' '}
      <a href="https://gatsbyjs.com">Gatsby</a> &middot;{' '}

    </div>
  </Container>
)

export default Footer
