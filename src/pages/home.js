import React from 'react'
//import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export default function Homepage() {
  
    return (
      <div>

        <div className='h-[100vh] w-full'>
          <h1 className='text-6xl px-10 py-10 heading'>ELECTRIC<br/>FISH</h1>
        </div>

        <div className='h-[100vh] heading'>

          <HashLink className='text-4xl px-10 py-5 float-left' to="#hist">
            <div className='rounded-full border-2 border-black aspect-square grid place-items-center'>
              <p className=''>History</p>
            </div>
          </HashLink>

          <HashLink className='text-4xl px-10 py-5 float-left' to="#where">
            <div className='rounded-full border-2 border-black aspect-square grid place-items-center'>
              <p className=''>Where?</p>
            </div>
          </HashLink>

          <HashLink className='text-4xl px-10 py-5 float-left' to="#how">
            <div className='rounded-full border-2 border-black aspect-square grid place-items-center'>
              <p className=''>How?</p>
            </div>
          </HashLink>

          <HashLink className='text-4xl px-10 py-5 float-left' to="#exp">
            <div className='rounded-full border-2 border-black aspect-square grid place-items-center'>
              <p className=''>Experiment</p>
            </div>
          </HashLink>


          
        </div>

        <div className='h-[100vh]' id='hist'>
          <h2 className='text-4xl px-10 py-10 heading'>History</h2>
          <p className='px-10'>timeline goes here</p>
        </div>
        <div className='h-[100vh]' id='where'>
          <h2 className='text-4xl px-10 py-10 heading'>Where?</h2>
          <p className='px-10'>worldmap goes here</p>
        </div>
        <div className='h-[100vh]' id='how'>
          <h2 className='text-4xl px-10 py-10 heading'>How?</h2>
        </div>
        <div className='h-[100vh]' id='exp'>
          <h2 className='text-4xl px-10 py-10 heading'>Experiment</h2>
        </div>
        
      </div>
    )
  }
