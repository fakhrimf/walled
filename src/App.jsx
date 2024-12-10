import './App.css'
import AccountNo from './components/AccountNo'
import Balance from './components/Balance'
import Greeting from './components/Greeting'
import AccountInfo from './components/AccountInfo'
import ButtonInfo from './components/ButtonInfo'
import Navbar from './components/Navbar'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import TableApp from './components/TableApp'

function App() {
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("logged-in") || localStorage.getItem("logged-in") === "false") {
      navigate("/")
      return;
    } else {
      setLoggedIn(true);
    }
  }, [navigate, loggedIn, setLoggedIn]);

  if (loggedIn) {
    return (
      <>
        <div className={loggedIn ? "" : "hidden"}>
          <Navbar activeTabNow={'Dashboard'}/>
          <div className='flex flex-row w-screen justify-between'>
            <Greeting name={JSON.parse(localStorage.getItem("user"))?.nick + "!"}/>
            <AccountInfo name={JSON.parse(localStorage.getItem("user"))?.name}/>
          </div>
          <div className='flex flex-row w-screen justify-start'>
            <AccountNo/>
            <Balance/>
            <div className='flex flex-row justify-end items-center ml-10' style={{"width": "55vw"}}>
              <ButtonInfo icon="plus"/>
              <ButtonInfo icon="send"/>
            </div>
          </div>
          <div className='flex p-10'>
            <TableApp/>
          </div>
        </div>
      </>
    )
  } else {
    return(
      <>
        <p>Loading...</p>
      </>
    )
  }
}

export default App
