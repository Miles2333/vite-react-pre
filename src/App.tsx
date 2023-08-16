import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// 1. 识别常规的变量
const name  =  "柴柴老师"

// 2. 原生tex方法调用
const getAge = ()=>{
  return 18
}


//3. 三元运算符
const flag = false


function App() {


  return (
    <div className='App'>
      {name}
      {getAge()}
      {flag ? '真棒': '真菜'}
      <h1>hello Vite</h1>





    </div>
  )
}

export default App
