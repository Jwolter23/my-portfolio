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
                    <h1 className='w-full h-1/3 flex  '>Testing out the text here as this is where I will be making my project descriptions dddddh jdv kd v djk vkjd vjkd v jdk vkjd vkjd jkvd jkv djk vdjkvjkdjkvd jvkd vjdk vdjk vdjkv dkv kd dvk vjd vdjk vd vkd kv d vdkkvd kvd  cdk cdk cdk ckd kd ckd kc kd c d cdk kcd cd kcd kcd d kcd k cd kcd kcd cd kcddcjcdcd kjk d ckddc kdd kckd dkj dkd kd dkk dkk d d kd kd dk d  dkk d c kd kd kcd kd  cd kd kcd cd d kdc c d d kd</h1>
                </div>
                </div>

                <div className='flex gap-6 mt-6 justify-end'>
                <div className='w-1/3 h-2/3 flex flex-col  border-2 '>
                <h1 className='flex justify-center underline font-bold'>Instrument Store</h1>
                    <h1 className='w-full h-1/3 flex '>Testing out the text here as this is where I will be making my project descriptions dddddh jdv kd v djk vkjd vjkd v jdk vkjd vkjd jkvd jkv djk vdjkvjkdjkvd jvkd vjdk vdjk vdjkv dkv kd dvk vjd vdjk vd vkd kv d vdkkvd kvd  cdk cdk cdk ckd kd ckd kc kd c d cdk kcd cd kcd kcd d kcd k cd kcd kcd cd kcddcjcdcd kjk d ckddc kdd kckd dkj dkd kd dkk dkk d d kd kd dk d  dkk d c kd kd kcd kd  cd kd kcd cd d kdc c d d kd</h1>
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
                </div>
                </div>


                <div className='flex gap-6 mt-4 justify-end'>
                <div className='w-1/3 h-2/3 flex flex-col border-2 '>
                <h1 className='flex justify-center underline font-bold'>Matrix Trivia</h1>
                    <h1 className='w-full h-1/3 flex'>Testing out the text here as this is where I will be making my project descriptions dddddh jdv kd v djk vkjd vjkd v jdk vkjd vkjd jkvd jkv djk vdjkvjkdjkvd jvkd vjdk vdjk vdjkv dkv kd dvk vjd vdjk vd vkd kv d vdkkvd kvd  cdk cdk cdk ckd kd ckd kc kd c d cdk kcd cd kcd kcd d kcd k cd kcd kcd cd kcddcjcdcd kjk d ckddc kdd kckd dkj dkd kd dkk dkk d d kd kd dk d  dkk d c kd kd kcd kd  cd kd kcd cd d kdc c d d kd</h1>
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
