import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import Overview from "./Dashboard/Overview";
import { Route, Routes } from "react-router-dom";
// import Login from "./Dashboard/Login";
import HeadersPage from "./Dashboard/Header";
import DataTable from "./Dashboard/DataTable";
function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <HeadersPage />
        <Dashboard />
        <Routes>
          <Route exact path="/overview" element={<Overview />}></Route>
          <Route exact path="/datatable" element={<DataTable />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
