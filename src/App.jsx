import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"

function App() {
  const [category, setCategory] = useState("general");
  return (
    <>
    <Navbar setCategory={setCategory} category={category}/>
    <NewsBoard category={category}/>
    </>
  )
}

export default App
