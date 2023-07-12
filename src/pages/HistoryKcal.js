import { useContext } from 'react'
import Header from '../components/Header'
import CalculatorContext from '../context/CalculatorContext'
import HistoryShow from '../components/History/HistoryShow'


function HistoryKcal() {


	// const {historyNutritions} = useContext(CalculatorContext)

	// const renderedNutrition = historyNutritions.map(nutrition=>{return <HistoryShow key={nutrition.id} nutrition={nutrition} />})


	return (
		<div>
			<Header />
			{/* {renderedNutrition} */}
		</div>
	)
}

export default HistoryKcal;
