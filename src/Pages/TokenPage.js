import React, { useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// import {Button} from 'antd'
import TokenImage from '../assets/images/TokenImage.png'
import { Typography } from 'antd';

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
		<div className="space__custom">
		<img src={TokenImage} style={{ maxWidth: '300px' }} alt="" ></img>
			<Typography.Title className='text-slab ' level={1} >Your Token is -:{paramToken}</Typography.Title>
			
		</div>
	)
}

export default TokenPage
