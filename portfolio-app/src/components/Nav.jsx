import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div>
            <div>
            <Link to='/'> Home </Link>
            <Link to='/projects'> Projects</Link>
            <Link to='/resume'> Resume </Link>
            <Link to='/contact'> Contact </Link>
            </div>
        </div>
    )
}