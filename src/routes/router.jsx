import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx';
import Calculator from '../pages/calculator/Calculator.jsx';
import ButtonEffects from '../pages/buttonEffect/ButtonEffects.jsx';
import PasswordChecker from '../pages/passwordChecker/PasswordChecker.jsx';
import SignUp from '../pages/authentication/SignUp.jsx';
import Login from '../pages/authentication/Login.jsx';
import AuthenticatedHome from '../pages/authentication/AuthenticatedHome.jsx';
import Accordian from '../pages/accordian/Accordian.jsx';



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [

        ]
    },
    {
        path: "password-checker",
        element: <PasswordChecker />,
    },
    {
        path: "button-effects",
        element: <ButtonEffects />,
    },
    {
        path: "calculator",
        element: <Calculator />,
    },
    {
        path: "register",
        element: <SignUp />,
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "authenticated",
        element: <AuthenticatedHome />,
    },
    {
        path: "accordian",
        element: <Accordian />,
    }
]);

export default router;