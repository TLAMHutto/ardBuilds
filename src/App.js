import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Home, Fungi} from './pages'
import Home from './pages/Home'
import Fungi from './pages/Fungi'
import NavBar from './components/Navbar'

function App(){
    return (
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fungi" element={<Fungi />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;