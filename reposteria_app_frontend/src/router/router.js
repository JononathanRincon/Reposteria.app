import {
    createBrowserRouter,
    Route,
    createRoutesFromElements
  } from "react-router-dom";
import IndexApp from '../IndexApp'
import Home from '../Home'
import Contador from "../components/Contador/Contador";
import Conózcanos from "../components/Conózcanos"; 
import Productos from "../components/Productos"; 
import Carrito from "../components/carrito";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import LoginForm from "../components/LoginForm/LoginForm";

export const router = createBrowserRouter(
    createRoutesFromElements( [
        <Route path="/" element={ <IndexApp />}>,
            <Route index element={ <Home /> } />,
            <Route path="/contador" element={ <Contador /> } />,
            <Route path="/Conózcanos" element={ <Conózcanos /> } />, 
            <Route path="/productos" element={ <Productos/> } />, 
            <Route path="carrito" element={<Carrito/>}/>,
            <Route path="/register" element={ <RegisterForm /> } />,
            <Route path="/login" element={ <LoginForm /> } />,
        </Route>
        ]
    )
)