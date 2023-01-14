import { Link } from 'react-router-dom'
import  Home  from './Home'
import { useRef } from 'react'

export default function Nav () {
    const myRef = useRef(null)

    const handleClick = (myRef) => {
        myRef.current.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <div>
            <div class=' flex justify-end gap-5 mr-4 pt-4 pb-0 text-silver'>
                <Link to='/'> Home </Link>
                <button onClick={()=>handleClick(myRef)}>Projects</button>
                <Link to='/resume'> Resume </Link>
                <Link to='/contact'> Contact </Link>
                
            </div>
            <div>
            <Home handleClick={handleClick}
                    myRef={myRef} />
            </div>
        </div>
    )
}