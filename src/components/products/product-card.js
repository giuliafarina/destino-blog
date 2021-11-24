import React from "react"
import { useStaticQuery, graphql } from "gatsby"


const cardStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "flex-start",
  padding: "1rem",
  marginBottom: "1rem",
  boxShadow: "5px 5px 25px 0 rgba(46,61,73,.2)",
  backgroundColor: "white",
  borderRadius: "6px",
  border: "solid 1px",
  maxWidth: "300px",
  color: "black"
}
const buttonStyles = {
  display: "block",
  fontSize: "13px",
  textAlign: "center",
  color: "#000",
  padding: "12px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "white",
  borderRadius: "6px",
  letterSpacing: "1.5px",
  margin: "auto",
  cursor: "pointer"
}


const titleStyles = {
  textAlign: "center"
}
const priceStyles = {
  textAlign: "center",
  margin: "auto"
}

const ProductCard = (props) => {
  const data = useStaticQuery(graphql`
query Product {
   allContentfulResource(sort: {fields: createdAt, order: ASC}) {
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

  return <>
    {data.allContentfulResource.nodes.map(node =>
      <div style={cardStyles} key={node.id}>
        <h3 style={titleStyles}>{node.title} </h3>
        {/* <p>{node.childContentfulResourceDescriptionTextNode.description}</p> */}
        <h4 style={priceStyles}>{node.price} £</h4>
        <button style={buttonStyles}
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
  </>
}


export default ProductCard;

