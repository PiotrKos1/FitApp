import { useContext } from "react";
import ProductShow from "./ProductShow";
import CalculatorContext from "../../context/CalculatorContext";


function ProductList({
    meal
}) {


    
    const renderedProducts = meal.products.map((product)=>{return <ProductShow key={product.id} product={product} />})
    return (
        <div>
            {renderedProducts}
        </div>
    )
}

export default ProductList;