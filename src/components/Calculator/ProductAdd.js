import { useContext, useState } from 'react'
import CalculatorContext from '../../context/CalculatorContext'


function ProductAdd(
	{meal}
	// {getNameProduct}
	) {
	const {getNameProduct, createProduct} = useContext(CalculatorContext)
	const [nameProduct, setNameProduct] = useState('')


	const handleFormSubmit = event => {
		event.preventDefault()
		// getNameProduct(nameProduct, meal.id)
		createProduct(nameProduct, meal.id)

		
		
		setNameProduct('')
	}

	const handleChange = event => {
		setNameProduct(event.target.value)
	}

	return (
		<div class='pt-1 m-3'>
			<form onSubmit={handleFormSubmit}>
				<div class='columns'>
					<div class='column is-one-second is-flex'>
						<div>
							<input
								value={nameProduct}
								onChange={handleChange}
								class='input is-primary is-small'
								type='text'
								placeholder='rice 100 gram'
							/>
						</div>
						<div class='pl-1'>
							<button class='button is-primary is-small'>add</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default ProductAdd
