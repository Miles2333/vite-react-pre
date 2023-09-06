import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




// 第五节课 - 样式控制
// 1. 行业样式 - 在元素身上绑定一个style属性即可

// 2. 类名样式 - 在元素身上绑定一个className属性即可
// 2.1 导入语法
import './app1.css'



// 1.1 把颜色什么之类的存为一个变量，抽离出去，会更干净
const style = {
  color:'red', 
  fontSize: '30px'
}

function App() {


  return (
    <div className='App'>
      <span style={style}> this is span </span>

      <span className='active'>测试类名样式</span>


    </div>
  )
}

export default App
