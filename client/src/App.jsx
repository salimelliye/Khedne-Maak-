import './App.css'
import { Routes, Route, Link } from 'react-router-dom' 
import { Home, SignIn, SignUp } from './components'

function App() {
	return (
		<div className="flex items-center justify-center">
			<Routes>
				<Route exact path='/' element={<Home/>}></Route>
				<Route path='/signin' element={<SignIn/>}></Route>
				<Route path='/signup' element={<SignUp/>}></Route>
			</Routes>
		</div>
	)
}

export default App
