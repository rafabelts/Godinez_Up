import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./SignUp.js"
import MainPage from "./pages/MainPage.js"
export default function Router() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp/>}/>
          <Route path='/app' element={<MainPage/>}/>
      </Routes>
      </BrowserRouter>
 );
}

