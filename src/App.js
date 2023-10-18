import React from 'react'
import './App.css'
import MainContent from './components/MainContent'
import MainHeader from './components/MainHeader'
// import GoogleTranslater from './components/GoogleTranslator'
import { Route, Routes } from 'react-router-dom'
import TokenPage from './components/TokenPage'
import TokenExpiredPage from './components/TokenExpiredPage'

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
			</Routes>
		</div>
	)
}

export default App
