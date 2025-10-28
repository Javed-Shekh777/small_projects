import { createBrowserRouter } from 'react-router-dom'; import App from '../App';
import Home from '../pages/Home.jsx';
import Projects from '../pages/Projects.jsx';
import PasswordChecker from '../pages/passwordChecker/PasswordChecker.jsx';
import ButtonEffects from '../pages/buttonEffect/ButtonEffects.jsx';
import Calculator from '../pages/calculator/Calculator.jsx';
import SignUp from '../pages/authentication/SignUp.jsx';
import Login from '../pages/authentication/Login.jsx';
import AuthenticatedHome from '../pages/authentication/AuthenticatedHome';
import Accordian from '../pages/accordian/Accordian.jsx';
import TemperatureCalc from '../pages/tempCalc/TemperatureCalc.jsx';
import TipCalculator from '../pages/tipCalc/TipCalculator.jsx';
import ToastContainer from '../pages/toast/ToastContainer.jsx';
import LoremIpsum from '../pages/loremIpsum/LoremIpsum.jsx';
import AgeCalculator from '../pages/ageCalc/AgeCalculator.jsx';
import BgChanger from '../pages/bgChanger/BgChanger.jsx';
import PasswordGenerator from '../pages/pswGenerator/PasswordGenerator.jsx';
import BMICalc from '../pages/bmiCal/BMICalc.jsx';

;


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'password-checker', element: <PasswordChecker /> },
      { path: 'button-effects', element: <ButtonEffects /> },
      { path: 'calculator', element: <Calculator /> },
      { path: 'authenticated', element: <AuthenticatedHome /> },
      { path: 'accordian', element: <Accordian /> },
      { path: 'temp-calc', element: <TemperatureCalc /> },
      { path: 'tip-calc', element: <TipCalculator /> },
      { path: 'toast', element: <ToastContainer /> },
      { path: 'lorem', element: <LoremIpsum /> },
      { path: 'age-calc', element: <AgeCalculator /> },
      { path: 'bgchanger', element: <BgChanger /> },
      { path: 'pswgen', element: <PasswordGenerator /> },
      { path: 'bmicalc', element: <BMICalc /> },
    ],
  },
  { path: 'register', element: <SignUp /> },
  { path: 'login', element: <Login /> },
]);

export default router;
