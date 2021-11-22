import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Products from '../components/Products/products'
import Hero from '../components/hero'

const Resources = () => {

    return (
        <Layout>
            <Hero title="Resources"
                content="As well as coaching school leaders and teachers, I work with people
who have neurodiversity challenges, which is what inspires many of the teaching resources I have
created."
            />
            <Products />
        </Layout>
    )
}

export default Resources;
