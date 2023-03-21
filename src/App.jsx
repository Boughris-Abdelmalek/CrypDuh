import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Test from "./pages/Test";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default App;
