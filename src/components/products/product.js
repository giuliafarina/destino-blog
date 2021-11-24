import React from "react"
import ProductCard from "./product-card"



const containerStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "1rem",
}

const Product = () => {
    return (
        <div style={containerStyles}>
            <ProductCard />
        </div>
    )
}

export default Product;