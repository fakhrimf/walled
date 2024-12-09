import logo from './components/Walled.png'
import './App.css'
import NavigationItem from './components/NavigationItem'

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
  return (
    <>
      <nav className='flex items-center w-screen justify-between bg-white p-5'>
        <img src={logo} alt="" />
        <div className='flex gap-x-20 pr-10 text-black'>
          {NavigationItem(menu)}
        </div>
      </nav>
    </>
  )
}

export default App
