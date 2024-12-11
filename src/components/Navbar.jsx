import logo from '/src/components/Walled.png'
import NavigationItem from '/src/components/NavigationItem'
import { useState } from "react"
import { useTheme } from '../utils/Contexts'


function Navbar({activeTabNow}) {
    const menu = [
        {
        title: "Dashboard",
        link: "/dashboard"
        },
        {
        title: "Transfer",
        link: "/transfer"
        },
        {
        title: "Topup",
        link: "/topup"
        },
        {
        title: "Signout",
        link: "/"
        },
    ]

    const [activeTab, setActiveTab] = useState(activeTabNow)
    const handleClick = (activeTab) => {
        setActiveTab(activeTab)
        if (activeTab === "Signout") {
            localStorage.setItem("logged-in", "false")
            localStorage.removeItem("user")
        }
    }

    const { isDark, toggleTheme } = useTheme()

    return (
            <nav className={isDark ? 'flex items-center w-screen justify-between bg-white p-5' : 'flex items-center w-screen justify-between bg-slate-800 p-5'}>
                <img src={logo} alt="" className='bg-white rounded-lg p-2' />
                <div className={isDark ? 'flex gap-x-20 pr-10 text-black' : 'flex gap-x-20 pr-10 text-white'}>
                    <NavigationItem menu={menu} handleClick={handleClick} activeTab={activeTab} isDark={isDark}/> 
                    <a onClick={() => {toggleTheme()}} href="#" className='flex flex-col items-center justify-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="teal" className="bi bi-sun flex rounded-full hover:bg-yellow-200 ease-in-out transition-all p-3" viewBox="0 0 16 16">
                            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                        </svg>
                    </a>
                </div>
            </nav>
    )
}

export default Navbar