import { useRef } from 'react'
import meWedding from '../Assets/meWedding.jpg'

export default function Home () {
    const myRef = useRef(null)

    const handleClick = () => {
        myRef.current.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <div>
            <div className="h-screen w-screen flex items-center">
                <div className='flex  mx-auto pb-10 w-3/4 justify-around'>
                    <div className='flex flex-col'>
                            <h4 className='text-blue-900 mb-4'>Hi, my name is...</h4>
                            <h1 className="text-6xl mb-2">Jordan Wolter</h1>
                            <h3 className=" text-2xl font-bold">Full Stack Software Developer</h3>
                            <h3 className='flex w-2/3 mt-4'>I am a sales representative turned Software Developer who brings exceptional communication, problem-solving skills, and a hard work ethic to any team I am on. Being a very result-driven individual motivated by utilizing my Full-stack development and interpersonal skills to break down and solve problems. I excel at working and collaborating with a team while also using my individual skills to solve various issues thrown my way</h3>
                    </div>
                    <img src={meWedding} className='rounded-lg object-cover'></img>
                </div>
                
            </div>
            <div className='flex justify-center h-screen w-screen'>
                <h1 clas>Projects</h1>
                <div>Project 1</div>
                <div>Project 2</div>
                <div> Project 3</div>
                <div> Project 4</div>
            </div>
            <div>
                <h1>Resume</h1>
            </div>
            <div>
                <h1>Contact</h1>
            </div>
        </div>
    )
}