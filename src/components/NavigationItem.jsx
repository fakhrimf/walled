function NavigationItem({menu, activeTab, handleClick}) {
    console.log(menu, activeTab);
    return(
            menu.map((item, index) => (
                <a onClick={() => handleClick(item.title)} key={index} href={item.link} className={activeTab === item.title ? "text-blue-600 underline decoration-2 underline-offset-8 text-lg m-6 group relative w-max" : "text-lg m-6 group relative w-max"}>
                    <p className="text-black">{item.title}</p>
                    <span className='absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-black group-hover:w-full'/>
                </a>
            )
        )
    )
}

export default NavigationItem;