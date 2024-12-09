function NavigationItem(menu) {
    // return (
    //     <div className="flex gap-x-8">
    //         {menu.map((item, index) => (
    //             <a key={index} href={item.link}>{item.title}</a>
    //         ))}
    //         </div>
    //     );
    return(
            menu.map((item, index) => (
                <a key={index} href={item.link} className='text-lg m-6 group relative w-max'>
                    <p className="text-black">{item.title}</p>
                    <span className='absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-black group-hover:w-full'/>
                </a>
            )
        )
    )
}

export default NavigationItem;