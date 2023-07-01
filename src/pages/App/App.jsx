import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar"
import PictureCarousel from "../Carousel/Carousel"
import Menopause from "../Menopause/Menopause";
import Perimenopause from "../Perimenopause/Perimenopause";
import Postmenopause from "../Postmenopause/Postmenopause";
import WhatIsMenopause from "../WhatIsMenopause/WhatIsMenopause"






const App = () => {


  return (
    <main>
    <NavBar />
    <PictureCarousel />
    <Routes>
    <Route path="/what-is-menopause" element={<WhatIsMenopause />}></Route>
    <Route path="/what-is-menopause/perimenopause" element={<Perimenopause />}></Route>
    <Route path="/what-is-menopause/menopause" element={<Menopause />}></Route>
    <Route path="/what-is-menopause/postmenopause" element={<Postmenopause />}></Route>
    </Routes>
    </main>
  )
}

export default App
