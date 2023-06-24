import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Rootlayout from "./layouts/Rootlayout";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import ContactLayout from "./layouts/ContactLayout";
import Mail from "./Pages/Mail";
import Phone from "./Pages/Phone";
import PageNotFound from "./Pages/PageNotFound";
import CareersLayout from "./layouts/CareersLayout";
import Careers from "./Pages/Careers";
import { careerLoader } from "./Pages/Careers";
import CareerError from "./Pages/CareerError";
import CareerDetail, { jobLoader } from "./Pages/CareerDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout/>}>
        <Route index element={<Home/>}/>
        <Route path="aboutus" element={<Aboutus/>}/>
        <Route path="contactus" element={<ContactLayout/>}>
              <Route path="mail" element={<Mail/>}/>
              <Route path="phone" element={<Phone/>}/>
        </Route>
        <Route path="careers" element={<CareersLayout/>}>
          <Route index element={<Careers/>} loader={careerLoader} errorElement={<CareerError/>}/>
          <Route path=":id" element={<CareerDetail/>} loader={jobLoader} errorElement={<CareerError/>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
