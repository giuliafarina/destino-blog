const escapeStringRegexp = require("escape-string-regexp")

const pagePath = `content`
const indexName = `Pages`

const pageQuery = `{
  allContentfulBlogPost {
    nodes {
      id
      title
      slug
    }
  }
}`

function pageToAlgoliaRecord({ id, ...rest }) {
  return {
    objectID: id,
    ...rest,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.allContentfulBlogPost.nodes.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries