import { BrowserRouter, Routes, Route } from "react-router-dom"
import Default_layout from "./layouts/Default_layout"
import HomePage from "../pages/HomePage"
import FilmPage from "../pages/FilmPage"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Default_layout />}>
            <Route index element={<HomePage />} />
            <Route path="films/:id" element={<FilmPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
