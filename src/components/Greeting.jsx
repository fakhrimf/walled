function Greeting({name}) {
    return (
        <div className="p-10 flex flex-col">
            <p className='text-7xl font-bold text-black'>Good Morning, {name}</p>
            <br/>
            <p className='text-2xl text-black'>Check all your incoming and outgoing transactions here</p>
        </div>
    )
}

export default Greeting