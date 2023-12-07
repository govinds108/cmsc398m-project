import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signin, isSignedIn } from "./api";
import classes from "./Login.module.css";

const Login = () => {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (isSignedIn()) {
            navigate("/");
        }
    }, [navigate]);

    const handleSubmit = () => {
        signin(username);
        navigate("/");
    };

    const toggleSignUp = () => {
        setUsername("");
        setPassword("");
        setLoggedIn(!loggedIn);
    };

    return (
        <div className={classes.container}>
            <div className={classes.login}>
                <h1>moodily</h1>
                <h2>{loggedIn ? "Welcome Back!" : "Create an Account"}</h2>
                <form>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div>
                        <button onClick={handleSubmit}>
                            {loggedIn ? "Log In" : "Create"}
                        </button>
                        <button onClick={toggleSignUp}>
                            {loggedIn ? "Sign Up" : "Log In"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
