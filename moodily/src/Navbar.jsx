import { useNavigate } from "react-router-dom";
import { signout } from "./api";
import classes from "./Navbar.module.css";
import Eren from "./assets/eren.png";

// eslint-disable-next-line react/prop-types
const Navbar = ({ tab }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        signout();
        navigate("/login");
    };

    return (
        <div className={classes.container}>
            <img src={Eren} alt="Eren" />
            <h1>Eren Yeager</h1>
            <p>@yayger</p>
            <button
                className={tab === "feed" ? `${classes.orange}` : ""}
                onClick={() => navigate("/feed")}
            >
                Feed
            </button>
            <button
                className={tab === "profile" ? `${classes.orange}` : ""}
                onClick={() => navigate("/profile")}
            >
                Profile
            </button>
            <button className={tab === "settings" ? `${classes.orange}` : ""}>
                Settings
            </button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Navbar;
