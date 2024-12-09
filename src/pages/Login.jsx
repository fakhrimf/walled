import bg from '/src/components/Money.png'
import logo from '/src/components/logo-lg.png'

function Login() {
    return(
        <div className="flex w-screen h-screen">
            <div className="flex flex-col align-middle items-center" style={{"width": "50vw"}}>
                <img src={logo} alt='walled-icon' className='w-80 mt-64'/>
                <form className="w-full pl-32 pr-32 pt-20">
                    <div className="mb-4">
                        <input className="appearance-none border bg-slate-100 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email"/>
                    </div>
                    <div className="mb-6">
                        <input className="appearance-none border bg-slate-100 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
                        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                    </div>
                    <div className="flex flex-col items-start justify-between">
                        <button className="shadow-lg bg-teal-700 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded transition-all w-full" type="button">
                            Sign In
                        </button>
                        <p className='pt-10 text-black'>Belum punya akun? <a className='text-teal-700 hover:underline hover:text-teal-400 transition-all' href='#'>Daftar disini!</a></p>
                    </div>
                </form>
            </div>
            <div className="flex flex-col">
                <img src={bg} alt="money" className='h-screen object-cover' style={{"width": "50vw"}}/>
            </div>
        </div>
    )
}

export default Login