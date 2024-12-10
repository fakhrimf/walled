import bg from '/src/components/Money.png'
import logo from '/src/components/logo-lg.png'
import ActionButton from "/src/components/ActionButton";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import { Link } from "react-router";

function Login() {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(true);

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard");
        localStorage.setItem("logged-in", "true")
        localStorage.setItem("user", JSON.stringify(loginForm));
    };
    // if (localStorage.getItem("logged-in") === "true") {
    //     navigate("/dashboard");
    // }
    useEffect(() => {
        if (localStorage.getItem("logged-in") === "true") {
            navigate("/dashboard");
        } else {
            setLoggedIn(false);
        }
    }, [navigate, loggedIn, setLoggedIn]);

    return(
        <section className={loggedIn ? "hidden" : "flex w-full h-screen bg-white"}>
            <div className="flex flex-col w-1/2 items-center justify-center">
                <div>
                    <img className="w-[290px] mx-auto" src={logo} alt="logo" />
                    <form className="flex flex-col mt-24 gap-y-5">
                        <input
                        className="bg-[#FAFBFD] pl-7 py-4 min-w-[400px] rounded-[10px] text-black"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => handleChange(e)}
                        />
                        <input
                        className="bg-[#FAFBFD] pl-7 py-4 min-w-[400px] rounded-[10px] text-black"
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => handleChange(e)}
                        />
                        <ActionButton
                        disabled={!loginForm.email || !loginForm.password}
                        onClick={handleSubmit}
                        >
                        Login
                        </ActionButton>
                    </form>
                    <div className="w-full mt-4 text-black">
                        Belum punya akun?{" "}
                        <Link to="/register" className="text-[#19918F] text-left">
                        Daftar di sini
                        </Link>
                    </div>
                </div>
            </div>
            <img
                src={bg}
                alt="login background"
                className="w-1/2 object-cover"
            />
        </section>
    )
}

export default Login