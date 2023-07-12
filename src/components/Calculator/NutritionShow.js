// import { useContext } from "react"
// import CalculatorContext from "../../context/CalculatorContext"
// import { Link } from "react-router-dom"

// function NutritionShow({
// 	// totalNutritions
// }) {

// 	const {totalNutritions, createHistoryNutritions} = useContext(CalculatorContext)

// 	const handleClick = () => {
// 		createHistoryNutritions(resultKcal, resultProtein, resultCarbo, resultFat)
// 	}

// 	const reducerKcal = (acc, current) => acc + current.kcal
// 	const resultKcal = totalNutritions.reduce(reducerKcal, 0)

// 	const reducerProtein = (acc, current) => acc + current.protein
// 	const resultProtein = totalNutritions.reduce(reducerProtein, 0)

// 	const reducerCarbo = (acc, current) => acc + current.carbo
// 	const resultCarbo = totalNutritions.reduce(reducerCarbo, 0)

// 	const reducerFat = (acc, current) => acc + current.fat
// 	const resultFat = totalNutritions.reduce(reducerFat, 0)

	
// 	return (
// 		<div>
// 			<div class='columns has-text-weight-bold has-text-grey'>
// 				<div class='column is-one-sixth'></div>
// 				<div class='column is-one-sixth'></div>
// 				<div class='column is-one-sixth'>kcal</div>
// 				<div class='column is-one-sixth'>protein</div>
// 				<div class='column is-one-sixth'>carbohydrates</div>
// 				<div class='column is-one-sixth'>fat</div>
// 			</div>
// 			<div class='columns has-text-weight-bold'>
// 				<div class='column is-one-sixth'></div>
// 				<div class='column is-one-sixth'>Total:</div>
// 				<div class='column is-one-sixth'>{resultKcal}</div>
// 				<div class='column is-one-sixth'>{resultProtein}</div>
// 				<div class='column is-one-sixth'>{resultCarbo}</div>
// 				<div class='column is-one-sixth'>{resultFat}</div>
// 			</div>
// 			<div class='pt-5'>

// 			<Link to={'/history'}><button onClick={handleClick} class="button is-info has-text-weight-bold">SAVE IN HISTORY</button></Link>
// 			</div>
	
// 		</div>
// 	)
// }

// export default NutritionShow;
