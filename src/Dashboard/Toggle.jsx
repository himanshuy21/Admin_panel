import { Route, Routes } from "react-router-dom";
import HeadersPage from "./Header";
import DataTable from "./DataTable";
import Services from "./Services";
import Dashboard from "./Dashboard";
import UserDetail from "./UserDetail";
import Overview from "./Overview";
function TogglePage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <HeadersPage />
        <Dashboard />
        <Routes>
          <Route exact path="/overview" element={<Overview />}></Route>
          <Route exact path="/datatable" element={<DataTable />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/userdetail" element={<UserDetail />}></Route>
        </Routes>
      </div>
    </div>
  );
}

{
  /* <div>{currentForm === "LoginPage" ? <LoginPage /> : <App />}</div>; */
}

export default TogglePage;
