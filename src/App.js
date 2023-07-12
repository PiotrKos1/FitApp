import 'bulma/css/bulma.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import InfoKcal from './pages/InfoKcal'
import CalculateKcal from './pages/CalculateKcal'
import HistoryKcal from './pages/HistoryKcal'


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<InfoKcal />} />
					<Route path='/info' element={<InfoKcal />} />
					
					<Route path='/calculator' element={<CalculateKcal />} />

					<Route path='/history' element={<HistoryKcal />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
