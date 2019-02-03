import React from "react";
import ProductsTable from "../productList/ProductsTable.jsx";
import Filters from "./Filters.jsx"
import NumberOfProductsMenu from "./NumberOfProductsMenu.jsx";
import DisplayMode from "./DisplayMode.jsx";

export default class MainContent extends React.Component {
    render () {
        return (
            <div className="MainContent">
                <h2>Search results: 24</h2>
                <Filters orientation={this.props.orientation}
                         sizes={this.props.sizes}
                         industries={this.props.industries}
                         styles={this.props.styles}
                         onSelectFilterValue={this.props.onSelectFilterValue}/>
                <DisplayMode/>
                <NumberOfProductsMenu/>
                <ProductsTable products={this.props.products}/>
            </div>
            )
    }
}