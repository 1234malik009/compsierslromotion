import React, { useEffect, useState } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'

function TokenPage() {
	const navigate = useNavigate()
	const { token: paramToken } = useParams()

	useEffect(() => {
		let tokenData = localStorage.getItem("token")
		if(tokenData != null && tokenData != ""){
			tokenData = JSON.parse(tokenData)
			if(tokenData.token == paramToken){
				if(tokenData.status == false){
					let tmp = {
						"token": paramToken,
						"status": true
					}
					localStorage.setItem("token", JSON.stringify(tmp))
				}else{
					navigate('/token-expired')
				}
			}else{
				navigate('/not-found')
			}
		}else{
			navigate('/not-found')
		}
		
	}, [])

	return (
		<div>
			<h2 className="text-white">Token Page{paramToken}</h2>
		</div>
	)
}

export default TokenPage
