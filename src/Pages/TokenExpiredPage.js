import React from 'react'
import expire from '../assets/images/401_unautrized.svg'

function TokenExpiredPage() {
	return (
		<div className="space__custom">
			<img src={expire} style={{ maxWidth: '450px' }} alt="" />
		</div>
	)
}

export default TokenExpiredPage
