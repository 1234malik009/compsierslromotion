import React from 'react'
import notFound from '../assets/images/404-error.svg'

function NotFound() {
	return (
		<div className="space__custom">
			<img src={notFound} style={{ maxWidth: '450px' }} alt="" />
		</div>
	)
}

export default NotFound
