import { useRef } from 'react'
import meWedding from '../Assets/meWedding.jpg'
import FilmFolio from '../Assets/FilmFolio.png'
import Instrument from '../Assets/Instrument.jpg'
import WolterFinance from '../Assets/WolterFinance.png'
import MatrixTrivia from '../Assets/MatrixTrivia.png'
import Nav from './Nav'
import { AiOutlineGithub } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillProfile } from 'react-icons/ai'
import { FaPython } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { DiReact } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { DiDjango } from 'react-icons/di'
import { SiSequelize } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { AiFillCode } from 'react-icons/ai'
import { FaJava } from 'react-icons/fa'
import { DiPhp } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'

export default function Home ({ myRef, myRef2, myRef3, handleClick3, handleClick2, handleClick }) {
    
    return (
        <div>
            <div className='w-99 flex justify-end mr-9 gap-5'>
            <button onClick={handleClick3}>About Me</button>
            <button onClick={handleClick}>Projects</button>
            <button onClick={handleClick2}>Contact</button>
            
            <a className='resume' href="https://drive.google.com/file/d/1hplIEs0gqnJ7ozaWLkbaLjFVwLf-U2xm/view?usp=share_link" target="_blank">Resume</a>
            
            </div>
            
            <div className="h-screen w-screen flex items-center">
                <div className='flex  mx-auto pb-10 w-3/4 justify-around items-center'>
                    <div className='flex flex-col text-silver'>
                            <h4 className='text-silver mb-4'>Hi, my name is...</h4>
                            <h1 className="text-6xl mb-2">Jordan Wolter</h1>
                            <h3 className=" text-2xl font-bold">Full Stack Software Developer</h3>
                            <h3 className='flex w-2/3 mt-4 text-lg'>I am a sales representative turned Software Developer who brings exceptional communication, problem-solving skills, and a hard work ethic to any team I am on. Being a very result-driven individual motivated by utilizing my Full-stack development and interpersonal skills to break down and solve problems. I excel at working and collaborating with a team while also using my individual skills to solve various issues thrown my way</h3>
                    </div>
                    <div className='flex justify-center items-center w-full h-full'>
                            <img src={meWedding} className='rounded-lg object-contain'/>
                    </div>
                </div>
                
            </div>

            <h1 ref={myRef3} className='flex justify-center text-4xl text-silver'>About Me</h1>
            <div className='flex justify-center w-screen mt-10 text-silver'>
                <h1 className='text-1xl w-2/5'> Welcome to my portfolio! I am a Full-Stack Software Engineer based in the Philadelphia / NYC metroploitan area. I have extensive knowledge in both font-end and back-end languages / frameworks. As you will see below, I have projects built in JavaScript, Python, React, Django, Sequelize, Node, and many other languages, frameworks, and dev tools. Currently I am refining my skills by building out projects in the languages I currently know, while also learning new languages like Java, PHP, and Tailwind (which this site was built with). </h1>
            </div>
            <div className='w-screen h-screen flex justify-center'>
                

                <div className='grid  md:grid-cols-4 gap-12 justify-center items-center w-full h-2/3 px-8'>
                    <div className='card w-full h-1/3'>
                        <h1 className='mb-12 align-top flex justify-center text-2xl text-silver'>Languages</h1>
                        <div className='flex justify-center gap-2'>
                            <h2 className='text-4xl'> <FaPython /></h2>
                            <h2 className='text-4xl'> <DiJavascript1 /></h2>
                            <h2 className='text-4xl'> <AiOutlineConsoleSql /> </h2>
                            <h2 className='text-4xl'> <AiFillHtml5 /></h2>
                            <h2 className='text-4xl'> <DiCss3 /> </h2>
                        </div>
                    </div>
                    <div className='card w-full h-1/3'>
                        <h1 className='mb-8 align-top flex justify-center text-2xl text-silver'>FrameWorks</h1>
                        <div className='flex  justify-center items-center gap-2'>
                            <h2 className='text-5xl'> <DiReact /></h2>
                            <h2 className='text-4xl'> <FaNodeJs /></h2>
                            <h2 className='text-6xl'> <DiDjango /></h2>
                            <h2 className='text-4xl'> <SiSequelize /></h2>
                            <h2 className='text-4xl'> <SiTailwindcss /></h2>
                        </div>
                    </div>
                    <div className='card w-full h-1/3'>
                        <h1 className='mb-12 align-top flex justify-center text-2xl text-silver'>Dev Tools</h1>
                        <div className='flex justify-center gap-4'>
                            <h2 className='text-4xl'> <SiPostgresql /></h2>
                            <h2 className='text-4xl'> <AiOutlineGithub /></h2>
                            <h2 className='text-4xl'> <AiFillCode /></h2>
                        </div>
                    </div>
                    <div className='card w-full h-1/3'>
                        <h1 className='mb-10 align-top flex justify-center text-2xl text-silver'>Learning</h1>
                        <div className='flex  justify-center gap-4'>
                            <h2 className='text-5xl'> <FaJava /></h2>
                            <h2 className='text-7xl'> <DiPhp /></h2>
                        </div>
                    </div>
                </div>



            </div>
            
            <div className=' h-screen w-screen px-8 pt-7'>
                <h1 ref={myRef} className=' text-silver flex justify-center text-4xl'>Projects</h1>

                <div className='flex gap-6 mt-10 items-center'>
                <div className='w-2/5 min-h-full  border-2  justify-center'>
                    <img src={FilmFolio} className='w-full h-full'></img>
                </div>
                
                <div className='w-2/3 h-2/3 flex flex-col border-2 items-center bg-sea'>
                    <h1 className='flex justify-center underline font-bold text-silver mt-3 '>FilmFolio</h1>
                    <h1 className='min-w-full min-h-full flex mt-3 px-4 text-silver'>FilmFolio was a passion project of mine based on my love for movies. Starting with the backend, I had created a database using Django. With three models (Users, Movies, and Reviews) I was able to input all the necessary data to be rendered on the front end. Creating the correct URL's and Views was an important part in getting Full CRUD working on the front-end and back-end. Along with setting up my foreign keys and serializers correctly so the data on the back-end could be accessed correctly. Using react, I created a new react-app and started to render the data in my database through axios calls.  Once the data had been rendered I was able to create functional components to get functionality out of my Search feature, movie details, and adding / deleting to a watchlist.  This is a full CRUD application. The reviews section is able to Create a review, Delete a review, Update a review, and of course Read a review. I had also tried a new technology called firebase for getting Auth up and running. Styling was done through CSS and Tailwind.</h1>
                    <div className='flex gap-3 justify-center mt-4 mb-3'>
                    <a href="https://github.com/Jwolter23/FilmFolio" target="_blank">GitHub</a>
                    <a href="https://filmfolio.netlify.app/" target="_blank">Deployed Site</a>
                    </div>
                </div>
                
                
                </div>

                <div className='flex gap-6 mt-10 justify-end items-center '>
                <div className='w-2/3 h-2/3 flex flex-col  border-2 bg-sea'>
                <h1 className='flex justify-center underline font-bold text-silver mt-3'>Instrument Store</h1>
                    <h1 className='min-w-full min-h-full flex mt-5 px-4 text-silver'>Instrument Store was our first group project, created by me and three other students. Our website acts as a storefront where users can browse the selection of Instruments we provided. Instrument Store utilizes the PERN stack PostgreSQL, Express, React, and Node.js. As the team lead on this project planning using tools like Wireframe, Trello, Lucidchart, and Agile methodologies was extremley important. We began by creating a database in PostgreSQL and associated / seeded these models through Sequelize. Once our back-end was created we created a React-app and set up Controllers, Routes, and Middleware. We then rendered our data through axios calls. After having everything set up we were able to get full CRUD on our comment model which can only be accessed when logged in. Our final goal was to get Auth working which we were able to successfully implement. To start, enter our deployed site, create an account, login, and you will be able to use our comment section. </h1>
                    <div className='flex gap-3 justify-center mt-9 mb-3'>
                    <a href="https://github.com/Jwolter23/Instrument_Store" target="_blank">GitHub</a>
                        <h1>Deployed Site</h1>
                    </div>
                </div>
                <div className='w-2/5 min-hfull  border-2 flex justify-center'>
                    <img src={Instrument} className='w-full h-full'></img>
                </div>
                </div>


                <div className='flex gap-6 mt-10 items-center'>
                <div className='w-2/5 min-h-full  border-2 flex justify-center'>
                    <img src={WolterFinance} className='w-full h-full'></img>
                </div>
                <div className='w-2/3 h-2/3 flex flex-col border-2 bg-sea'>
                <h1 className='flex justify-center underline font-bold text-silver mt-3'>Wolter Finance</h1>
                    <h1 className='min-w-full min-h-full flex mt-3 px-4 text-silver '>Wolter Finance is an app used to stay up to date on stock market information. This app utilizes a third-party API from Financial Modeling Prep. With Wolter Finance, users will be greeted with new stories, top market price and percent changes, daily sector report all updating in real time through setInterval. Users can also See daily activity of the highest gainers and loser stocks, along with a search feature that will display in depth detail of said stock along with new stories from the past week. All of this was done through axios calls using Javascript, React, and CSS.</h1>
                    <div className='flex gap-3 justify-center mt-8 mb-3'>
                    <a href="https://github.com/Jwolter23/Wolter-Finance" target="_blank">GitHub</a>
                    <a href="https://wolterfinance.netlify.app/" target="_blank">Deployed Site</a>
                    <a href="https://site.financialmodelingprep.com/" target="_blank">FMP API</a>
                    </div>
                </div>
                </div>


                <div className='flex gap-6 mt-10 justify-end items-center'>
                <div className='w-2/3 h-2/3 flex flex-col border-2 bg-sea'>
                <h1 className='flex justify-center underline font-bold text-silver mt-3'>Movie Trivia</h1>
                    <h1 className='min-w-full min-h-full flex mt-3 px-4 text-silver'>Movie Trivia was my first project utilizing Javascript and HTML/CSS. Movie Trivia is a trivia game based off the movie The Matrix. Movie Trivia was a great way for me to learn some game logic and provided a fantastic challenege for my first project. Through DOM manipulation I was able to get a light/dark mode working, and through CSS was able to create a typewriter effect for users to see when the app loads.</h1>
                    <div className='flex gap-3 justify-center mt-7 mb-3'>
                    <a href="https://github.com/Jwolter23/Movie_Trivia" target="_blank">GitHub</a>
                    <a href="https://matrix-trivia.surge.sh/" target="_blank">Deployed Site</a>
                    </div>
                </div>
                <div className='w-2/5 min-h-full  border-2 flex justify-center'>
                    <img src={MatrixTrivia} className='w-full h-full'></img>
                </div>
                </div>

            </div>


            <div className='h-screen w-screen'>
                <h1 className='opacity-0'>Resume</h1>
            </div>


            <div className='h-screen w-screen px-4'>
                <div className='flex justify-center flex-col'>
                <h1 ref={myRef2} className='flex justify-center text-silver text-4xl'>Contact Me!</h1>

                <div className='flex justify-center text-3xl text-silver '>
                    <h1>Now that you've seen my portfolio, click below and let's connect!</h1>
                </div>

                <div className=' w-screen h-2/5 flex justify-center items-center text-6xl gap-10  mt-10'>
                <a href="https://github.com/Jwolter23" target="_blank" className='text-6xl '><AiOutlineGithub /></a>
                <a href="mailto:jwolter456@gmail.com" target="_blank" className='text-6xl'><AiOutlineMail /></a>
                <a href="https://www.linkedin.com/in/jordan-wolter/" target="_blank" className='text-6xl'><AiFillLinkedin /></a>
                <a href="https://docs.google.com/document/d/1P3XO5b7imrJh4cM60MMumxrxfXUk09tZn_G4ZueSs_w/edit" target="_blank" className='text-6xl'><AiFillProfile /></a>
                
                </div>
                


            </div>
            </div>
        </div>
    )
    
}
