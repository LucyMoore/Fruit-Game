import React from 'react'
import ReactDOM from 'react-dom'

import Fruit from './components/fruit'

var counter = 0

function apple(){
  var d = new Date()
  var numArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o']
  var rand = Math.floor(Math.random()*14)+1
  console.log(numArr[rand])
  document.getElementById(numArr[rand]).style.backgroundImage="url('img/apple.jpg')"
}

function pick(e){
  counter++
  console.log(e.target.id)
  document.getElementById(e.target.id).style.backgroundImage="url('')"
}

ReactDOM.render(

<div>
<Fruit onClick={pick}/>
<button onClick={setInterval(apple, 2000)}>Go</button>
</div>,

 document.getElementById('content')
)
