
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Create from "./components/Create"
import Menu from "./components/menu"
import Search from "./components/Search"
import View from "./components/View"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu />
        <Routes>
          <Route path="/" element={<View />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
