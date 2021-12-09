const escapeStringRegexp = require("escape-string-regexp")

const pagePath = `content`
const indexName = `Pages`

const pageQuery = `{
  allContentfulBlogPost {
    edges {
      node {
        id
          title
          slug
      }
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries