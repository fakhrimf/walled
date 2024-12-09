import logo from '/src/components/Walled.png'
import NavigationItem from '/src/components/NavigationItem'
import { useState } from "react"

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
        link: "#"
        },
        {
        title: "Signout",
        link: "/"
        },
    ]
    const [activeTab, setActiveTab] = useState(activeTabNow)
    const handleClick = (activeTab) => {
        setActiveTab(activeTab)
    }
    return (
        <nav className='flex items-center w-screen justify-between bg-white p-5'>
            <img src={logo} alt="" />
            <div className='flex gap-x-20 pr-10 text-black'>
                <NavigationItem menu={menu} handleClick={handleClick} activeTab={activeTab}/> 
            </div>
        </nav>
    )
}

export default Navbar