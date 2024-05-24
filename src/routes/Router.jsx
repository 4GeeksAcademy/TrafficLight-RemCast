import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import DetailPage from "../views/DetailPage"
import ErrorPage from "../views/ErrorPage"

import Navbar from '../components/Navbar';


const Router = () => {
    return (
        <BrowserRouter basename="">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:uid" element={<DetailPage/>}/>
                <Route path="*" element={ <ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router