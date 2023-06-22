import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Rootlayout from "./layouts/Rootlayout";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import ContactLayout from "./layouts/ContactLayout";
import Mail from "./Pages/Mail";
import Phone from "./Pages/Phone";
import PageNotFound from "./Pages/PageNotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout/>}>
        <Route index element={<Home/>}/>
        <Route path="aboutus" element={<Aboutus/>}/>
        <Route path="contactus" element={<ContactLayout/>}>
              <Route path="mail" element={<Mail/>}/>
              <Route path="phone" element={<Phone/>}/>
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
