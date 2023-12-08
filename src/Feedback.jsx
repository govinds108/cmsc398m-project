import classes from "./Feedback.module.css";
import X from "./assets/x.png";
import Send from "./assets/send.png";

// eslint-disable-next-line react/prop-types
const Feedback = ({ onClose }) => {
    return (
        <>
            <span className={classes.background} onClick={onClose} />
            <div className={classes.container}>
                <div>
                    <h1>Feedback Form</h1>
                    <img
                        onClick={onClose}
                        src={X}
                        alt="X"
                        role="button"
                        tabIndex={0}
                    />
                </div>
                <textarea placeholder="Enter your feedback here..." />
                <div>
                    <input type="checkbox" />
                    <p>Email me updates about this ticket</p>
                    <img
                        onClick={onClose}
                        src={Send}
                        alt="Send"
                        role="button"
                        tabIndex={1}
                    />
                </div>
            </div>
        </>
    );
};

export default Feedback;
