import styles from "./App.module.css";
import Login from "./components/login/Login";
import StartScreen from "./components/starting/StartScreen";
import WriteList from "./components/list/WriteList";
import Today from "./components/todayDiary/Today";
import Edit from "./components/editPage/Edit";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/start" element={<StartScreen />} />
                <Route path="/" element={<Login />} />
                <Route path="/writelist" element={<WriteList />} />
                <Route path="/today" element={<Today />} />
                <Route path="/edit" element={<Edit />} />
            </Routes>
        </div>
    );
}

export default App;
