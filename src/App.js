import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import Overview from "./Dashboard/Overview";
import { Route, Routes } from "react-router-dom";
import HeadersPage from "./Dashboard/Header";
import DataTable from "./Dashboard/DataTable";
import Services from "./Dashboard/Services";
import UserDetail from "./Dashboard/UserDetail";
import LoginPage from "./Dashboard/Login";
import TogglePage from "./Dashboard/Toggle";
import FullForm from "./Dashboard/FullForm";
import Description from "./Dashboard/Description";
import AdminData from "./Dashboard/AdminDataDetail";
function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* <HeadersPage />
        <Dashboard /> */}
        <Routes>
          <Route exact path="/overview" element={<Overview />}></Route>
          <Route exact path="/datatable" element={<DataTable />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/userdetail" element={<UserDetail />}></Route>
          <Route exact path="/" element={<LoginPage />}></Route>
          <Route exact path="/home" element={<TogglePage />}></Route>
          <Route exact path="/fullform" element={<FullForm />}></Route>
          <Route exact path="/description" element={<Description />}></Route>
          <Route exact path="/datadetail" element={<AdminData />}></Route>
        </Routes>
      </div>
    </div>
  );
}

{
  /* <div>{currentForm === "LoginPage" ? <LoginPage /> : <App />}</div>; */
}

export default App;
