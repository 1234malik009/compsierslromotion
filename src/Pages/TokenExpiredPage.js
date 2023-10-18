import React from 'react'
import expire from '../assets/images/401_unautrized.svg'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
function TokenExpiredPage() {
	return (
		<div className="space__custom">
			<img src={expire} style={{ maxWidth: '450px' }} alt="" />
			<Button  className={"btn"}
                            size={"medium"}
                            type="primary"
                            htmlType="submit"
                            style={{textAlign: "center"}} > <Link to='/'>Go Back</Link></Button>
		</div>
	)
}

export default TokenExpiredPage
