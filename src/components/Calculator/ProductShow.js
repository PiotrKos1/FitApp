import { useContext } from "react"
import CalculatorContext from "../../context/CalculatorContext"


function ProductShow({product
}) {
    const {deleteProduct} = useContext(CalculatorContext)
  
    const handleDelete = () => {
        deleteProduct(product.id)
        
    }
    return (
        <div class="columns has-background-white-ter">
    <div class="column is-one-sixth"><button onClick={handleDelete} class='button is-danger is-small'>delete</button></div>
  <div class="column is-one-sixth">{product.name}</div>
  <div class="column is-one-sixth">{product.kcal}</div>
  <div class="column is-one-sixth">{product.protein}</div>
  <div class="column is-one-sixth">{product.carbo}</div>
  <div class="column is-one-sixth">{product.fat}</div>
</div>
    )
}

export default ProductShow;