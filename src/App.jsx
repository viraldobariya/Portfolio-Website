import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import { LeetcodeProvider } from "./context/LeetcodeContext"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <LeetcodeProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
          </Route>
        </Routes>
      </LeetcodeProvider>
    </ThemeProvider>
  )
}

export default App
