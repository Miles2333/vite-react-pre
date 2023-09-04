import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// React中如何完成列表渲染
// 技术方案: map  重复渲染的是哪个  

//一个歌曲列表
//想把这个列表渲染出来
const songs = [
  {id: 1, name: '痴心绝对'},
  {id: 2, name: '像我这样的人'},
  {id: 3, name: '南山南'}
]




function App() {


  return (
    <div className='App'>
      <ul>
        {songs.map(song=> <li>{song.name}</li>)}


      </ul>

    </div>
  )
}

export default App
