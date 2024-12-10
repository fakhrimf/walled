import ActionButton from "../components/ActionButton"
import Navbar from "../components/Navbar"

function Transfer() {
    return(
        <>
            <Navbar activeTabNow={'Transfer'}/>
            <div className="flex justify-center align-middle flex-col m-auto">
                <h1 className="text-black font-bold ml-96 mt-10">Transfer</h1>
                <div className="bg-white shadow-lg rounded-3xl flex justify-center align-middle flex-col ml-96 mr-96 mt-4 p-10">
                    <div className="flex flex-col bg-slate-50 px-10 rounded-3xl my-5">
                        <div className="bg-slate-50 rounded-3xl flex justify-start align-middle flex-row">
                            <p className="flex align-middle justify-center text-black py-7 text-2xl">To: </p>
                            <input type="text" className="bg-slate-50 w-full h-12 rounded-md m-5 text-2xl text-black border-none focus:outline-none" placeholder="03924783 (Asep)" />
                        </div>
                    </div>
                    <p className="text-black font-bold text-xl">Amount</p>
                    <div className="flex flex-col bg-slate-50 p-10 rounded-3xl my-5">
                        <div className="bg-slate-50 rounded-3xl flex justify-start align-middle flex-row">
                            <p className="flex align-middle justify-center text-black font-bold text-2xl">IDR</p>
                            <input type="number" className="bg-slate-50 w-full h-full flex align-middle justify-center rounded-md ml-5 font-bold  text-2xl text-black border-none focus:outline-none" placeholder="100000" />
                        </div>
                        <span className='transition-all h-0.5 mt-5 bg-black w-full'/>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-black text-lg ml-2">Balance: </p>
                        <p className="text-teal-600 font-bold ml-2 text-lg">IDR {JSON.parse(localStorage.getItem("user"))?.balance}</p>
                    </div>
                    <div className="flex flex-col bg-slate-50 px-10 rounded-3xl mt-5 mb-16">
                        <div className="bg-slate-50 rounded-3xl flex justify-start align-middle flex-row">
                            <p className="flex align-middle justify-center text-black py-7 text-2xl">Notes: </p>
                            <input type="text" className="bg-slate-50 w-full h-12 rounded-md m-5 text-2xl text-black border-none focus:outline-none" placeholder="Untuk beli mobil" />
                        </div>
                    </div>
                    <ActionButton onClick={console.log("click")}>
                        Transfer
                    </ActionButton>
                </div>
            </div>
        </>
    )
}

export default Transfer