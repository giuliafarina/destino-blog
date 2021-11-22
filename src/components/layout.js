import React from 'react'
import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import Search from "./search"
const searchIndices = [{ name: `posts`, title: `posts` }]

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <Navigation />
        <main>{children}</main>
        <Search indices={searchIndices} />
        <Footer />
      </>
    )
  }
}

export default Template
