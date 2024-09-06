import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Handle2 from "./components/Handle2"
import Handle1 from "./components/Handle1"
import { useEffect, useState } from "react"


function App() {
  

  return (
    <BrowserRouter>
    <Appbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/handle1" element={<Handle1/>} />
        <Route path="/handle2" element={<Handle2/>} />
        <Route path="/contactUs" element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


function Appbar(){

  const location=useLocation()
  const navigate=useNavigate()
  const [color,setColor]=useState('border-slate-600')
  const arr=['border-green-700','border-purple-600','border-orange-900','border-slate-500','border-emerald-700']
  useEffect(()=>{
    const interval=setInterval(() => {
      const res=Math.floor(Math.random() * arr.length)
      console.log(arr[res])
      setColor(arr[res])
    }, 1000);
    return ()=> clearInterval(interval)
  },[])
  const handleHome=()=>{
    navigate('/')
  }
  const handle1=()=>{
    navigate('/handle1')
  }
  const handle2=()=>{
    navigate('/handle2')
  }
  const handleContact=()=>{
    navigate('/contactUs')
  }

  return(
    <div>
      <div className="bg-gray-900 hover:bg-gray-950 flex justify-center border-b ">
        <div className={`w-1/2 px-4 py-3 my-4 rounded-full flex flex-row justify-between bg-black border-2  hover:border-purple-700 ${color} transition duration-500 ease-in-out`}>
          <button onClick={handleHome} className={`${
          location.pathname==='/'
          ?'bg-purple-600 text-white border border-white'
          :'bg-white hover:bg-purple-600 hover:text-white'}
          basis-1/5 rounded-full px-5 py-1 ml-6}`}>Home</button>
          <button onClick={handle1} className={`${
          location.pathname==='/handle1'
          ?'bg-purple-600 text-white border border-white'
          :'bg-white hover:bg-purple-600 hover:text-white'}
          basis-1/5 rounded-full px-5 py-1}`} >example</button>
          <button onClick={handle2} className={`${
          location.pathname==='/handle2'
          ?'bg-purple-600 text-white border border-white'
          :'bg-white hover:bg-purple-600 hover:text-white'}
          basis-1/5 rounded-full px-5 py-1}`}>example</button>
          <button onClick={handleContact} className={`${
          location.pathname==='/contactUs'
          ?'bg-purple-600 text-white border border-white'
          :'bg-white hover:bg-purple-600 hover:text-white'}
          basis-1/5 rounded-full px-5 py-1 mr-6}`} >About us</button>
        </div>
      </div>
    </div>
  )
}


