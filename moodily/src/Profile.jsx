import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isSignedIn } from "./api";
import Navbar from "./Navbar";
import classes from "./Profile.module.css";

const Profile = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isSignedIn()) {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <div className={classes.container}>
            <Navbar tab={"profile"} />
            <div className={classes.profile}>
                <div className={classes.stats}>
                    <div>
                        <p>Days Active</p>
                        <h1>260</h1>
                    </div>
                    <div>
                        <p>Mood Streak</p>
                        <h1>132</h1>
                    </div>
                    <div>
                        <p>Supporters</p>
                        <h1>0</h1>
                    </div>
                </div>
                <h3>Previous Moods:</h3>
                <p className={classes.mood}>
                    I am free, and yet the world is in ruins. The cycle of
                    hatred persists, and my hands are stained with the blood of
                    countless lives. I yearned for freedom, but it seems that
                    true liberation is an elusive dream. As I stand atop the
                    decimated world, I can&apos;t help but wonder if humanity is
                    destined to repeat its mistakes. The burden of being the
                    Attack Titan has taken its toll, and I am left to
                    contemplate the choices that led us to this grim reality.
                </p>
                <p className={classes.mood}>
                    War has a way of distorting ideals. The rumbling has begun,
                    the colossal Titans marching toward an uncertain future. I
                    am both the hero and the villain in this tragic play. My
                    friends stand by me, but at what cost? The consequences of
                    my actions weigh on my soul, and the world crumbles around
                    us. Is this freedom? Is this the price we pay for breaking
                    the chains that bound us within the walls?
                </p>
                <p className={classes.mood}>
                    The truth is a double-edged sword. Grisha&apos;s memories
                    revealed a history twisted by lies, and I find myself
                    questioning everything. The enemy we once despised may not
                    be our true foe. The world outside the walls is more complex
                    than we could have imagined. Betrayal and sacrifice seem to
                    be the only constants in this cruel narrative. I will seek
                    answers, even if it means confronting the demons within
                    myself.
                </p>
            </div>
        </div>
    );
};

export default Profile;
