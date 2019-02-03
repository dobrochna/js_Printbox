import React from "react";

import SideBar from "./general/SideBar.jsx";
import MainContent from "./general/MainContent.jsx";

export default class RootView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                {name: 'Automobil', size: '85x55mm', imgSrc: 'images/Automobil.png', isFavourite: true, rating: 3},
                {name: 'Killum', size: '90x50mm', imgSrc: 'images/Automobil.png', isFavourite: true, rating: 1},
                {name: 'Severamagenition', size: '90x50mm', imgSrc: 'images/Severamagenition.png', isFavourite: false, rating: 4},
                {name: 'Automobil', size: '85x55mm', imgSrc: 'images/Automobil.png', isFavourite: false, rating: 3},
                {name: 'Killum', size: '90x50mm', imgSrc: 'images/Automobil.png', isFavourite: false, rating: 1},
                {name: 'Severamagenition', size: '90x50mm', imgSrc: 'images/Severamagenition.png', isFavourite: false, rating: 5},
                {name: 'Automobil', size: '90x50mm', imgSrc: 'images/Automobil.png', isFavourite: true, rating: 3},
                {name: 'Killum', size: '90x50mm', imgSrc: 'images/Automobil.png', isFavourite: false, rating: 2},
                {name: 'Severamagenition', size: '90x50mm', imgSrc: 'images/Severamagenition.png', isFavourite: false, rating: 4},
                {name: 'Automobil', size: '85x55mm', imgSrc: 'images/Automobil.png', isFavourite: true, rating: 3},
                {name: 'Killum', size: '90x50mm', imgSrc: 'images/Automobil.png', isFavourite: true, rating: 1},
                {name: 'Severamagenition', size: '90x50mm', imgSrc: 'images/Severamagenition.png', isFavourite: false, rating: 4},
                {name: 'Automobil', size: '90x50mm', imgSrc: 'images/Automobil.png', isFavourite: false, rating: 3},
                {name: 'Killum', size: '90x50mm', imgSrc: 'images/Automobil.png', isFavourite: false, rating: 1},
                {name: 'Severamagenition', size: '90x50mm', imgSrc: 'images/Severamagenition.png', isFavourite: false, rating: 5},
                {name: 'Automobil', size: '90x50mm', imgSrc: 'images/Automobil.png', isFavourite: true, rating: 3},
                {name: 'Killum', size: '90x50mm', imgSrc: 'images/Automobil.png', isFavourite: false, rating: 2},
                {name: 'Severamagenition', size: '90x50mm', imgSrc: 'images/Severamagenition.png', isFavourite: false, rating: 4}
            ],
            orientation: [
                {label: "horizontal", isChecked: false, filterType: "orientation"},
                {label: "vertical", isChecked: false, filterType: "orientation"}
            ],
            sizes: [
                {label: "90x50mm", isChecked: false, productCount: 10, filterType: "sizes"},
                {label: "85x55mm", isChecked: false, productCount: 12, filterType: "sizes"}
            ],
            ratings: [
                {label: "OneStar", isChecked: false, imgSrc: 'images/Rating1Star.svg', productCount: 22, filterType: "ratings"},
                {label: "TwoStars", isChecked: false, imgSrc: 'images/Rating2Stars.svg', productCount: 18, filterType: "ratings"},
                {label: "ThreeStars", isChecked: false, imgSrc: 'images/Rating3Stars.svg', productCount: 34, filterType: "ratings"},
                {label: "FourStars", isChecked: false, imgSrc: 'images/Rating4Stars.svg', productCount: 27, filterType: "ratings"}
            ],
			favorites: [
			    {label: "Only favorites", isChecked: false, productCount: 12, filterType: "favorites"}
			],
            industries: [
                {label: "All industries", isChecked: false, productCount: 54, filterType: "industries"},
                {label: "Automotive", isChecked: false, productCount: 4, filterType: "industries"},
                {label: "Fashion", isChecked: false, productCount: 2, filterType: "industries"},
                {label: "Law", isChecked: false, productCount: 8, filterType: "industries"},
                {label: "IT", isChecked: false, productCount: 12, filterType: "industries"},
                {label: "Sport", isChecked: false, productCount: 9, filterType: "industries"},
                {label: "Art", isChecked: false, productCount: 3, filterType: "industries"}
            ],
            colors: [
                {name: 'darkBlue', isChecked: false, colorNumber: "rgb(106, 113, 230)"},
                {name: 'Blue', isChecked: false, colorNumber: "rgb(1, 146, 255)"},
                {name: 'lightBlue', isChecked: false, colorNumber: "rgb(97, 210, 254)"},
                {name: 'Green', isChecked: false, colorNumber: "rgb(72, 220, 108)"},
                {name: 'Pink', isChecked: false, colorNumber: "rgb(254, 74, 101)"},
                {name: 'Red', isChecked: false, colorNumber: "rgb(255, 85, 52)"},
                {name: 'Orange', isChecked: false, colorNumber: "rgb(255, 165, 0)"},
                {name: 'Yellow', isChecked: false, colorNumber: "rgb(254, 210, 1)"},
                {name: 'Grey', isChecked: false, colorNumber: "rgb(159, 160, 164)"},
            ],
            styles: [
                {label: "All styles", isChecked: false, productCount: 54, filterType: "styles"},
                {label: "Abstraction", isChecked: false, productCount: 4, filterType: "styles"},
                {label: "Geometry", isChecked: false, productCount: 2, filterType: "styles"},
                {label: "Men", isChecked: false, productCount: 8, filterType: "styles"},
                {label: "Women", isChecked: false, productCount: 12, filterType: "styles"},
                {label: "Children", isChecked: false, productCount: 9, filterType: "styles"},
                {label: "Music", isChecked: false, productCount: 3, filterType: "styles"},
                {label: "Vintage", isChecked: false, productCount: 12, filterType: "styles"},
                {label: "Flower", isChecked: false, productCount: 5, filterType: "styles"},
            ]
        }
    }

    onSelectFilterValue(idx, filterType) {
    	var arrayToSet = this.state[filterType];
    	console.log(arrayToSet);
    	if (idx != undefined) {
            arrayToSet[idx].isChecked = !arrayToSet[idx].isChecked;
            this.setState({
                [filterType]: arrayToSet
            });
        }
	}

	render() {
		return (
			<div className="RootView">
				<SideBar
                    orientation={this.state.orientation}
					sizes={this.state.sizes}
					ratings={this.state.ratings}
					favorites={this.state.favorites}
					industries={this.state.industries}
					colors={this.state.colors}
					styles={this.state.styles}
                    onSelectFilterValue={this.onSelectFilterValue.bind(this)}
				/>
				<MainContent
                    orientation={this.state.orientation}
                    sizes={this.state.sizes}
                    industries={this.state.industries}
                    styles={this.state.styles}
					products={this.state.products}
                    onSelectFilterValue={this.onSelectFilterValue.bind(this)}
				/>
			</div>
		);
	}
}
