import 'bulma/css/bulma.css'
import MealAdd from '../components/Calculator/MealAdd'
import MealList from '../components/Calculator/MealList'
import NutritionShow from '../components/Calculator/NutritionShow'
import Header from '../components/Header'

function CalculateKcal() {
	return (
		<div>
			<Header />
			<div class='container column is-half'>
				<MealAdd />
				<MealList />

			</div>
		</div>
	)
}

export default CalculateKcal
