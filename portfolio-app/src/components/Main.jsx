import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'


export default function Main () {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/projects' element={<Projects />}/>
                <Route path='/resume' element={<Resume />}/>
                <Route path='/contact' element={<Contact />}/>
                
            </Routes>
        </div>
    )
}