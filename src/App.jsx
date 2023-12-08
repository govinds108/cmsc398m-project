import { HashRouter, Routes, Route } from "react-router-dom";
import Feed from "./Feed";
import Login from "./Login";
import Profile from "./Profile";

const App = () => {
    return (
        <HashRouter
            basename={import.meta.env.DEV ? "/" : "/cmsc398m-project/"}
        >
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Feed />} />
            </Routes>
        </HashRouter>
    );
};

export default App;
