import React from "react"
import ProductCard from "./product-card"
import { graphql, StaticQuery } from "gatsby"


const containerStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "1rem",
}

const Products = () => {
    return (
        <div style={containerStyles}>
            <ProductCard />

        </div>
    )
}

export default Products;