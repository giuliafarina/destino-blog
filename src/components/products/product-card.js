import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as styles from "./product-card.module.css"
import reading from "../../documents/reading.pdf"

const ProductCard = (props) => {
  const data = useStaticQuery(graphql`
query Product {
   allContentfulResource(sort: {fields: createdAt, order: ASC}) {
    nodes {
      id
       childContentfulResourceDescriptionTextNode {
          description
        }
      childContentfulResourceDescriptionTextNode {
        childrenMarkdownRemark{
           excerpt(format: HTML)
        }
      }
      price
      title
      fileId
    }
  }
}
`);

  return <div className={styles.container}>
    {data.allContentfulResource.nodes.map(node =>
      <div className={styles.cardBody} key={node.id}>
        <h3 className={styles.title}>{node.title} </h3>
        <div dangerouslySetInnerHTML={{
          __html: node.childContentfulResourceDescriptionTextNode.childrenMarkdownRemark[0].excerpt,
        }} />
        {/* <h4 className={styles.price}>{node.price} £</h4> */}
        {/*  <button className={styles.button}
          className="snipcart-add-item"
          data-item-id={node.id}
          data-item-price={node.price}
          data-item-url="/resources"
          data-item-name={node.title}
          data-item-file-guid={node.fileId}
          data-item-description={node.childContentfulResourceDescriptionTextNode.description}
        >
          Add to cart
        </button> */}

        {/*  TODO:add props to differentiate pdf download 
         TODO: find out way to upload zip files */}
        <button><a href={reading} download>Download</a></button>
      </div>
    )}
  </div>
}


export default ProductCard;

