import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isSignedIn } from "./api";
import Feedback from "./Feedback";
import Navbar from "./Navbar";
import classes from "./Feed.module.css";
import Armin from "./assets/armin.png";
import Eren from "./assets/eren.png";
import Mikasa from "./assets/mikasa.png";

const Feed = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState("");
    const [posts, setPosts] = useState([]);
    const [showFeedback, setShowFeedback] = useState(false);

    useEffect(() => {
        if (!isSignedIn()) {
            navigate("/login");
        }
    }, [navigate]);

    const handlePost = () => {
        if (post.length > 0) {
            setPosts([post, ...posts]);
            setPost("");
        }
    };

    return (
        <div className={classes.container}>
            {showFeedback && (
                <Feedback onClose={() => setShowFeedback(false)} />
            )}
            <Navbar tab={"feed"} />
            <div className={classes.feed}>
                <div className={classes.left}>
                    <div className={classes.post}>
                        <textarea
                            type="text"
                            placeholder="I must destroy the world so that my friends can live in peace..."
                            value={post}
                            onChange={(e) => setPost(e.target.value)}
                            rows={6}
                        />
                        <button onClick={handlePost}>Post</button>
                    </div>
                    {posts.map((p, i) => (
                        <div key={i} className={classes.comment}>
                            <img src={Eren} alt="Eren" />
                            <div>
                                <div>
                                    <p>
                                        <b>Eren Yeagar</b>
                                    </p>
                                    <p>@yayger</p>
                                </div>
                                <p>{p}</p>
                            </div>
                        </div>
                    ))}
                    <div className={classes.comment}>
                        <img src={Mikasa} alt="Mikasa" />
                        <div>
                            <div>
                                <p>
                                    <b>Mikasa Ackerman</b>
                                </p>
                                <p>@mikursed</p>
                            </div>
                            <p>
                                I remember the days when we were just kids,
                                running through the fields, blissfully unaware
                                of the challenges that awaited us. Eren was
                                always full of energy, determination burning in
                                his eyes. Little did I know that the flame
                                within him would grow into a raging fire that
                                would consume everything in its path.
                            </p>
                        </div>
                    </div>
                    <div className={classes.comment}>
                        <img src={Armin} alt="Armin" />
                        <div>
                            <div>
                                <p>
                                    <b>Armin Arlert</b>
                                </p>
                                <p>@drama_arlert</p>
                            </div>
                            <p>
                                Exploring the world isn&apos;t just about
                                charting new territories on a map; it&apos;s
                                about discovering the uncharted territories
                                within ourselves, unlocking the boundless
                                possibilities that lie beyond the horizon of our
                                comfort zones.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={classes.right}>
                    <div>
                        <p>Recommended Activity</p>
                        <ul>
                            <li>Destroy the world</li>
                            <li>Take a nap</li>
                            <li>Go to the sea shore</li>
                        </ul>
                    </div>
                    <button onClick={() => setShowFeedback(true)}>
                        Feedback
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Feed;
