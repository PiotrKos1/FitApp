import { useContext, useState } from 'react'
import CalculatorContext from '../../context/CalculatorContext'

function MealAdd() {
	const { createMeal } = useContext(CalculatorContext)
	const [nameMeal, setNameMeal] = useState('')

	const handleFormSubmit = event => {
		event.preventDefault()

		createMeal(nameMeal)
		setNameMeal('')
	}

	const handleChange = event => {
		setNameMeal(event.target.value)
	}

	return (
		<div class='m-3'>
			<form onSubmit={handleFormSubmit}>
				<h5 class='title is-4 has-text-weight-bold has-text-grey'>Add your meals!</h5>
				<div class='columns'>
					<div class='column is-one-second is-flex'>
						<div>
							<input
								onChange={handleChange}
								value={nameMeal}
								class='input is-primary'
								type='text'
								placeholder="Meal's name"
							/>
						</div>
						<div class='pl-2'>
							<button class='button is-primary'>add</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default MealAdd
