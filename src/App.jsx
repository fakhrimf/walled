import './App.css'
import AccountNo from './components/AccountNo'
import Balance from './components/Balance'
import Greeting from './components/Greeting'
import AccountInfo from './components/AccountInfo'
import ButtonInfo from './components/ButtonInfo'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar activeTabNow={'Dashboard'}/>
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
