import { useRef } from 'react'
import meWedding from '../Assets/meWedding.jpg'
import FilmFolio from '../Assets/FilmFolio.png'
import Instrument from '../Assets/Instrument.jpg'
import WolterFinance from '../Assets/WolterFinance.png'
import MatrixTrivia from '../Assets/MatrixTrivia.png'
import Nav from './Nav'

export default function Home ({ myRef, handleClick }) {
    
    return (
        <div>
            <div className='w-99 flex justify-end mr-9'>
            <button onClick={handleClick}>Projects</button>
            </div>
            
            <div className="h-screen w-screen flex items-center">
                <div className='flex  mx-auto pb-10 w-3/4 justify-around'>
                    <div className='flex flex-col text-silver'>
                            <h4 className='text-blue-900 mb-4'>Hi, my name is...</h4>
                            <h1 className="text-6xl mb-2">Jordan Wolter</h1>
                            <h3 className=" text-2xl font-bold">Full Stack Software Developer</h3>
                            <h3 className='flex w-2/3 mt-4'>I am a sales representative turned Software Developer who brings exceptional communication, problem-solving skills, and a hard work ethic to any team I am on. Being a very result-driven individual motivated by utilizing my Full-stack development and interpersonal skills to break down and solve problems. I excel at working and collaborating with a team while also using my individual skills to solve various issues thrown my way</h3>
                    </div>
                    <img src={meWedding} className='rounded-lg object-cover'></img>
                </div>
                
            </div>
            
            <div className=' h-screen w-screen px-8 pt-7'>
                <h1 ref={myRef} className=' text-silver flex justify-center text-3xl'>Projects</h1>

                <div className='flex gap-6 mt-6'>
                <div className='w-1/3 h-1/3  border-2  justify-center'>
                    <img src={FilmFolio} className='w-full h-full'></img>
                </div>
                <div className='w-1/3 h-2/3 flex flex-col border-2 '>
                    <h1 className='flex justify-center underline font-bold  '>FilmFolio</h1>
                    <h1 className='w-full h-1/3 flex  '>FilmFolio was a passion project of mine based on my love for movies. Starting with the backend, I had created a database using Django. With three models (Users, Movies, and Reviews) I was able to input all the necessary data to be rendered on the front end. Creating the correct URL's and Views was an important part in getting Full CRUD working on the front-end and back-end. Along with setting up my foreign keys and serializers correctly so the data on the back-end could be accessed correctly. Using react, I created a new react-app and started to render the data in my database through axios calls.  Once the data had been rendered I was able to create functional components to get functionality out of my Search feature, movie details, and adding / deleting to a watchlist.  This is a full CRUD application. The reviews section is able to Create a review, Delete a review, Update a review, and of course Read a review. I had also tried a new technology called firebase for getting Auth up and running. Styling was done through CSS and Tailwind.</h1>
                    <div className='flex gap-3 justify-center'>
                    <a href="https://github.com/Jwolter23/FilmFolio" target="_blank">GitHub</a>
                        <h1>Deployed Site</h1>
                    </div>
                </div>
                
                </div>

                <div className='flex gap-6 mt-6 justify-end'>
                <div className='w-1/3 h-2/3 flex flex-col  border-2 '>
                <h1 className='flex justify-center underline font-bold'>Instrument Store</h1>
                    <h1 className='w-full h-1/3 flex '>Instrument Store was our first group project, created by me and three other students. Our website acts as a storefront where users can browse the selection of Instruments we provided. Instrument Store utilizes the PERN stack PostgreSQL, Express, React, and Node.js. As the team lead on this project planning using tools like Wireframe, Trello, Lucidchart, and Agile methodologies was extremley important. We began by creating a database in PostgreSQL and associated / seeded these models through Sequelize. Once our back-end was created we created a React-app and set up Controllers, Routes, and Middleware. We then rendered our data through axios calls. After having everything set up we were able to get full CRUD on our comment model. </h1>
                    <div className='flex gap-3 justify-center'>
                    <a href="https://github.com/Jwolter23/Instrument_Store" target="_blank">GitHub</a>
                        <h1>Deployed Site</h1>
                    </div>
                </div>
                <div className='w-1/3 h-1/3  border-2 flex justify-center'>
                    <img src={Instrument} className='w-full h-full'></img>
                </div>
                </div>


                <div className='flex gap-6 mt-6'>
                <div className='w-1/3 h-1/3  border-2 flex justify-center'>
                    <img src={WolterFinance} className='w-full h-full'></img>
                </div>
                <div className='w-1/3 h-2/3 flex flex-col border-2 '>
                <h1 className='flex justify-center underline font-bold'>Wolter Finance</h1>
                    <h1 className='w-full h-1/3 flex '>Testing out the text here as this is where I will be making my project descriptions dddddh jdv kd v djk vkjd vjkd v jdk vkjd vkjd jkvd jkv djk vdjkvjkdjkvd jvkd vjdk vdjk vdjkv dkv kd dvk vjd vdjk vd vkd kv d vdkkvd kvd  cdk cdk cdk ckd kd ckd kc kd c d cdk kcd cd kcd kcd d kcd k cd kcd kcd cd kcddcjcdcd kjk d ckddc kdd kckd dkj dkd kd dkk dkk d d kd kd dk d  dkk d c kd kd kcd kd  cd kd kcd cd d kdc c d d kd</h1>
                    <div className='flex gap-3 justify-center'>
                    <a href="https://github.com/Jwolter23/Wolter-Finance" target="_blank">GitHub</a>
                    <a href="https://wolterfinance.netlify.app/" target="_blank">Deployed Site</a>
                        
                    </div>
                </div>
                </div>


                <div className='flex gap-6 mt-4 justify-end'>
                <div className='w-1/3 h-2/3 flex flex-col border-2 '>
                <h1 className='flex justify-center underline font-bold'>Movie Trivia</h1>
                    <h1 className='w-full h-1/3 flex'>Testing out the text here as this is where I will be making my project descriptions dddddh jdv kd v djk vkjd vjkd v jdk vkjd vkjd jkvd jkv djk vdjkvjkdjkvd jvkd vjdk vdjk vdjkv dkv kd dvk vjd vdjk vd vkd kv d vdkkvd kvd  cdk cdk cdk ckd kd ckd kc kd c d cdk kcd cd kcd kcd d kcd k cd kcd kcd cd kcddcjcdcd kjk d ckddc kdd kckd dkj dkd kd dkk dkk d d kd kd dk d  dkk d c kd kd kcd kd  cd kd kcd cd d kdc c d d kd</h1>
                    <div className='flex gap-3 justify-center'>
                    <a href="https://github.com/Jwolter23/Movie_Trivia" target="_blank">GitHub</a>
                    <a href="https://matrix-trivia.surge.sh/" target="_blank">Deployed Site</a>
                    </div>
                </div>
                <div className='w-1/3 h-1/3  border-2 flex justify-center'>
                    <img src={MatrixTrivia} className='w-full h-full'></img>
                </div>
                </div>

            </div>


            <div className='h-screen w-screen'>
                <h1>Resume</h1>
            </div>
            <div className='h-screen w-screen'>
                <h1>Contact</h1>
            </div>
        </div>
    )
    
}
