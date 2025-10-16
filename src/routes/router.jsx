import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx';
import Calculator from '../pages/calculator/Calculator.jsx';
import ButtonEffects from '../pages/buttonEffect/ButtonEffects.jsx';
import PasswordChecker from '../pages/passwordChecker/PasswordChecker.jsx';
import SignUp from '../pages/authentication/SignUp.jsx';
import Login from '../pages/authentication/Login.jsx';
import AuthenticatedHome from '../pages/authentication/AuthenticatedHome.jsx';
import Accordian from '../pages/accordian/Accordian.jsx';
import TemperatureCalc from '../pages/tempCalc/TemperatureCalc.jsx';
import TipCalculator from '../pages/tipCalc/TipCalculator.jsx';
import ToastContainer from '../pages/toast/ToastContainer.jsx';
import LoremIpsum from '../pages/loremIpsum/LoremIpsum.jsx';
import AgeCalculator from '../pages/ageCalc/AgeCalculator.jsx';



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
    },
     {
        path: "temp-calc",
        element: <TemperatureCalc />,
    },
     {
        path: "tip-calc",
        element: <TipCalculator />,
    },
       {
        path: "toast",
        element: <ToastContainer />,
    },
     {
        path: "lorem",
        element: <LoremIpsum />,
    },
     {
        path: "age-calc",
        element: <AgeCalculator />,
    }
]);

export default router;