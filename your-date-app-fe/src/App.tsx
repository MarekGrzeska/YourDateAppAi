import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import InsideAppLayout from "./components/AppLayout/InsideAppLayout";
import Homepage from "./pages/Homepage/Homepage";
import Loginpage from "./pages/Loginpage/Loginpage";
import Registerpage from "./pages/Registerpage/Registerpage";
import Dashboardpage from "./pages/Dashboardpage/Dashboardpage";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Homepage />} />
            <Route path="login" element={<Loginpage />} />
            <Route path="register" element={<Registerpage />} />
          </Route>
          <Route element={<InsideAppLayout />}>
            <Route path="board" element={<Dashboardpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
