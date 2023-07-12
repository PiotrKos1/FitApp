import { useContext } from 'react'
import MealShow from './MealShow'
import CalculatorContext from '../../context/CalculatorContext'

function MealList() {
	const { meals } = useContext(CalculatorContext)
	const renderedMeals = meals.map(meal => {
		return <MealShow key={meal.id} meal={meal} />
	})
	return <div>{renderedMeals}</div>
}

export default MealList;




