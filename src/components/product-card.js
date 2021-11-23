import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ProductCard = (props) => {

  const data = useStaticQuery(graphql`
query Product {
   allContentfulResource {
    nodes {
      id
      childContentfulResourceDescriptionTextNode {
        description
      }
      price
      title
      fileId
    }
  }
}
`);

  return <section>
    {data.allContentfulResource.nodes.map(node =>
      <div>
        <h1 key={node.id}
          title={node.title} />
        <h4>{node.childContentfulResourceDescriptionTextNode.description}</h4>
        <h2>{node.price} £</h2>


        <button
          className="snipcart-add-item"
          data-item-id={node.id}
          data-item-price={node.price}
          data-item-url="/"
          data-item-name={node.title}
        >
          Add to cart
        </button>
      </div>
    )}
  </section>
}


export default ProductCard;

