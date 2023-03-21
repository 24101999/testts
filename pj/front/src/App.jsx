import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home.jsx";
import Cadastro from "./components/Cadastro";
import Page from "./components/edit/Page";
import Edit from "./components/edit/Edit";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/admin/edit/:id" element={<Edit />} />
          {/* <Route path="/edit/:id" element={<Edit />} /> */}
          <Route path="/admin" element={<Page />} />
          <Route path="/" element={<Login />}></Route>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/cadastro" element={<Cadastro />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
