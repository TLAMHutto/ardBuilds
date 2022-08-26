import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Home, Fungi} from './pages'
import Home from './pages/Home'
import Fungi from './pages/Fungi'

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fungi" element={<Fungi />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;