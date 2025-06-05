import { BrowserRouter, Routes, Route } from "react-router-dom"
import Default_layout from "./layouts/Default_layout"
import HomePage from "../pages/HomePage"
import FilmPage from "../pages/FilmPage"
// import CreateFilmPage from "../pages/CreateFilmPage"
import GlobalContext from "./contexts/globalContext"
import { useState } from "react"

function App() {

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Default_layout />}>
              <Route index element={<HomePage />} />
              {/* <Route path="films/create" element={<CreateFilmPage />} /> */}
              <Route path="films/:id" element={<FilmPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
