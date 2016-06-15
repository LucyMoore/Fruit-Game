import React from 'react'
import ReactDOM from 'react-dom'

import Input from './input'

function post(){
	console.log('hello')
}



module.exports = class delegate extends React.Component {

	render (){
	    return (
	    	<div>
	    		<Input onChange={post}/>
	    	</div>
	   	)

	}
}
