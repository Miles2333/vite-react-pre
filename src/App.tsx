import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




//条件渲染
//技术方案: 三元表达式(常用)  逻辑和运算

// 1. 三元表达式 - 满足条件才渲染一个span标签
// 2. &&

const flag = false
function App() {


  return (
    <div className='App'>
      {flag ? <span> this is span</span>: null}

      // 前面布尔值为true 后面的span标签才会显示【这个字段需要被删除】
      {true && <span>this is span</span>}

    </div>
  )
}

export default App
