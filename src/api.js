const signin = (username) => {
    localStorage.setItem("USERNAME", username);
};

const isSignedIn = () => {
    return localStorage.getItem("USERNAME") !== null;
};

const signout = () => {
    localStorage.removeItem("USERNAME");
};

export { signin, isSignedIn, signout };
