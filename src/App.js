import React from 'react'
import './App.css'
import MainContent from './Theme/MainContent'
import MainHeader from './Theme/MainHeader'

// import GoogleTranslater from './components/GoogleTranslator'
import { Route, Routes } from 'react-router-dom'
import TokenPage from './Pages/TokenPage'
import TokenExpiredPage from './Pages/TokenExpiredPage'
import NotFound from './Pages/not-found'


function App() {
	return (
		<div className="body">
			<MainHeader />
			{/* <div style={{ position: 'absolute', right: '10px', top: '-20px' }}>
				<GoogleTranslater />
			</div> */}
			<Routes>
				<Route path="/" element={<MainContent />} />
				<Route path="/:token" element={<TokenPage />} />
				<Route path="/token-expired" element={<TokenExpiredPage />} />
				<Route path="/not-found" element={<NotFound />} />
                <Route path="/" element={<button/>}/>
			</Routes>
		</div>
	)
}

export default App
