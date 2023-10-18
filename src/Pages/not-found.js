import React from 'react'
import notFound from '../assets/images/404-error.svg'
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div className="space__custom">
			<img src={notFound} style={{ maxWidth: '450px' }} alt="" />
			<Button  className={"btn"}
                            size={"medium"}
                            type="primary"
                            htmlType="submit"
                            style={{textAlign: "center"}} > <Link to='/'>Go Back</Link></Button>
		</div>
	)
}

export default NotFound
