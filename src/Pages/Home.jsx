import React from 'react'
import { Link } from 'react-router-dom'
import programmer from '../assets/programmer.png'
import ProjectCard from '../Components/ProjectCard'


function Home() {
  return (
    <div>
        <div className="row">
            <div className="col-6">
                <h3 className='text-center'>Project Fair</h3>
                <p style={{textAlign:'justify'}}>
                A project is a series of structured tasks, activities, and deliverables that are carefully executed to achieve a desired outcome. They are temporary efforts to create value through unique products, services and processes.

Each aspect of a project must go through the phases of the project lifecycle before reaching an end goal. This lifecycle allows project managers to execute each phase of their project effectively. It enables them to plan each task and activity meticulously, ensuring the highest chances of a project’s success.
                </p>
                <div className='text-center'>
                    <Link to={'/login'} ><button className='btn btn-dark mt-2 mb-5'>Get Started</button></Link>
                </div>
            </div>
            <div className="col-6">
                <img src={programmer} width={'550px'} alt=''></img>
                
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        
                        <h3 className='text-center m-5 '>Explore Our Project</h3>
                        
                        <marquee width="100%" height="400px" direction="left"> 
                            <div>
                                <ProjectCard/>
                            </div>
                        </marquee>
            </div>
            
        </div>
        <div className="row mx-5">
            <h1 className='text-center m-5'> Our Services</h1>
            <div className="col-md-4">
                <div className="card shadow p-5" style={{height:'550px'}}>
                    <h3 className='text-center m-2'>Web Designing</h3>
                    <p style={{textAlign:'justify'}} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, eius. Dicta libero beatae consectetur assumenda, fugit sapiente incidunt numquam est vero, expedita et quos eum hic rerum repellat cumque quod! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident rem itaque qui quidem est, omnis facere inventore maiores ab nobis laudantium fugiat velit illum sunt vero, impedit amet consequuntur. Magni.

                    </p>


                </div>
            </div>
            <div className="col-md-4">
            <div className="card shadow p-5" style={{height:'550px'}} >
            <h3 className='text-center m-2'>Web Designing</h3>
                    <p style={{textAlign:'justify'}} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, eius. Dicta libero beatae consectetur assumenda, fugit sapiente incidunt numquam est vero, expedita et quos eum hic rerum repellat cumque quod! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident rem itaque qui quidem est, omnis facere inventore maiores ab nobis laudantium fugiat velit illum sunt vero, impedit amet consequuntur. Magni.

                    </p>
                    </div>
            </div>
            <div className="col-md-4">
            <div className="card shadow p-5" style={{height:'550px'}} >
            <h3 className='text-center m-2'>Web Designing</h3>
                    <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, eius. Dicta libero beatae consectetur assumenda, fugit sapiente incidunt numquam est vero, expedita et quos eum hic rerum repellat cumque quod! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident rem itaque qui quidem est, omnis facere inventore maiores ab nobis laudantium fugiat velit illum sunt vero, impedit amet consequuntur. Magni.

                    </p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Home