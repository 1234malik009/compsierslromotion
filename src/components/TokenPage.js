import React, { useEffect, useState } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'

function TokenPage() {
	const [expired, setExpired] = useState(false)
	const params = useParams()
	const navigate = useNavigate()
	const { token: paramToken } = useParams()
	const tokenStatus = {
		key: paramToken,
		status: false,
	}

	useEffect(() => {
		localStorage.setItem('token-status', JSON.stringify(tokenStatus))
		const tokenData = JSON.parse(localStorage.getItem('token-status'))

		if (tokenData.key === params.token) {
			if (!tokenData.status) {
				console.log('token update')
				const updateTokenStatus = {
					key: paramToken,
					status: true,
				}
				localStorage.setItem('token-status', JSON.stringify(updateTokenStatus))
			} else if (tokenData.status) {
				console.log('worked')
				navigate('/token-expired')
				localStorage.removeItem('token-status')
			} else {
				navigate('/not-found')
			}
		} else {
			navigate('/not-found')
		}
	}, [navigate, params.token, tokenStatus])

	return (
		<div>
			<h2 className="text-white">TokenPage{paramToken}</h2>
		</div>
	)
}

export default TokenPage
