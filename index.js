import React from 'react'
import ReactDOM from 'react-dom'

import Fruit from './components/fruit'

var counter = 0
var levelup = 0
document.getElementById('score').innerHTML= "Score: " + counter

function go(){
  level()
  setInterval(level, 8000)
}

function level(){
  levelup++
  console.log(levelup)
  if(levelup === 1){
    setInterval(apple, 2000)
  }
  if(levelup === 2){
    setInterval(apple, 1500)
  }
  if(levelup === 3){
    setInterval(apple, 1000)
  }
  if(levelup === 4){
    setInterval(apple, 500)
  }
  if(levelup === 5){
    setInterval(apple, 400)
  }
  if(levelup === 6){
    setInterval(apple, 300)
  }
  if(levelup >= 7){
    alert("GAME OVER, your score " + counter)
    location.reload();
  }
}

function apple(){
  var d = new Date()
  var numArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','aa','bb','cc','dd','ee']
  var rand = Math.floor(Math.random()*30)+1
  console.log(numArr[rand])
  document.getElementById(numArr[rand]).style.backgroundImage="url('img/apple.jpg')"
}


function pick(e){
  if(document.getElementById(e.target.id).style.backgroundImage){
    counter++
    console.log(e.target.id)
    document.getElementById(e.target.id).style.backgroundImage="url('')"
    document.getElementById('score').innerHTML = "Score: " + counter
  }
}

ReactDOM.render(
  <div>
    <button onClick={go}>Go</button>
    <Fruit onClick={pick}/>
  </div>,
   document.getElementById('content')
  )
