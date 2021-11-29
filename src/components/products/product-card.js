import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as styles from "./product-card.module.css"





const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}


export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};



const ProductCard = (props) => {
  const data = useStaticQuery(graphql`
query Product {
   allContentfulResource(sort: {fields: createdAt, order: ASC}) {
    nodes {
      id
      childContentfulResourceDescriptionTextNode {
        childrenMarkdownRemark{
          html
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
          __html: node.childContentfulResourceDescriptionTextNode.childrenMarkdownRemark[0].html,
        }} />
        <h4 className={styles.price}>{node.price} £</h4>
        <button className={styles.button}
          className="snipcart-add-item"
          data-item-id={node.id}
          data-item-price={node.price}
          data-item-url="/"
          data-item-name={node.title}
          data-item-description={node.childContentfulResourceDescriptionTextNode.description}
        >
          Add to cart
        </button>
      </div>
    )}
  </div>
}


export default ProductCard;

