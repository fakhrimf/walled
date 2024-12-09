import logo from './components/Walled.png'
import './App.css'
import NavigationItem from './components/NavigationItem'
import { useState } from "react"
import AccountNo from './components/AccountNo'
import Balance from './components/Balance'
import Greeting from './components/Greeting'
import AccountInfo from './components/AccountInfo'
import ButtonInfo from './components/ButtonInfo'

function App() {
  const menu = [
    {
      title: "Dashboard",
      link: "#"
    },
    {
      title: "Transfer",
      link: "#"
    },
    {
      title: "Topup",
      link: "#"
    },
    {
      title: "Signout",
      link: "#"
    },
  ]

  const [activeTab, setActiveTab] = useState("Dashboard")

  const handleClick = (activeTab) => {
    setActiveTab(activeTab)
  }

  return (
    <>
      <nav className='flex items-center w-screen justify-between bg-white p-5'>
        <img src={logo} alt="" />
        <div className='flex gap-x-20 pr-10 text-black'>
          <NavigationItem menu={menu} handleClick={handleClick} activeTab={activeTab}/> 
        </div>
      </nav>
      <div className='flex flex-row w-screen justify-between'>
        <Greeting name="Vyto"/>
        <AccountInfo name="Fitrah Aisyah"/>
      </div>
      <div className='flex flex-row w-screen justify-start'>
        <AccountNo/>
        <Balance/>
        <div className='flex flex-row justify-end items-center ml-10' style={{"width": "55vw"}}>
          <ButtonInfo icon="plus"/>
          <ButtonInfo icon="send"/>
        </div>
      </div>
    </>
  )
}

export default App
