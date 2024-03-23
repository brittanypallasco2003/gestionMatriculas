import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Home page</h1>}/>
      <Route path="/login" element={<h1>Home page</h1>}/>
      <Route path="/" element={<h1>Home page</h1>}/>
      <Route path="/" element={<h1>Home page</h1>}/>
      <Route path="/" element={<h1>Home page</h1>}/>
    </Routes>
     
    </BrowserRouter>
  )
}

export default App
