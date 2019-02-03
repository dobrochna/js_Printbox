import React from "react";
import Product from "./Product.jsx";

export default class ProductsTable extends React.Component {

    _showProducts() {
        return (
            this.props.products.map((product, idx) => {
                return (
                    <Product
                        key={"item nr"+idx}
                        name={product.name}
                        size={product.size}
                        imgSrc={product.imgSrc}
                        isFavourite={product.isFavourite}
                        rating={product.rating}
                    />
                )
            })
        );
    }

    render () {
        const products = this._showProducts();
        return (
            <div className="ProductsTable">
                {products}
            </div>
        )
    }
}