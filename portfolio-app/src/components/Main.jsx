import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import Nav from './Nav'
import { useRef } from 'react'


export default function Main () {
    const myRef = useRef(null);
    const handleClick = () => {
        myRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div>
                    
            <Routes>
                <Route path='/' element={<Home myRef={myRef} handleClick={handleClick} />} />
            </Routes>
            
        </div>
    )
}