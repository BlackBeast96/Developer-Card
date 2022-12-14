import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSpring, useChain, animated, useTrail, } from "react-spring"
import { Button, ButtonGroup } from "@mui/material"
function App() {
  const style = useSpring({
    from: { rotate: 0 },
    config: { duration: 3000 },
    to: { rotate: 360 },
    loop: true
  })
  const anime = useSpring({
    from: { rotate: 360 },
    config: { duration: 2000 },
    to: { rotate: 0 },
    loop: true
  })
  return (
    <>
      <div className='flex justify-center '>
        <div className='absolute w-32 h-32 bg-black mt-24 z-10 rounded-md flex justify-center overflow-hidden'>
          <animated.div style={anime} className='w-20 h-[15rem] mt-[-4rem] bg-blue-500  shadow-2xl blur-md shadow-blue-900'></animated.div>
          <div className='w-[7.7rem] h-[7.7rem] bg-red-500 rounded-md absolute mt-[0.15rem]'>
            <img className='rounded-md h-[7.7rem] w-[7.7rem]' src='./hem.jpg' />
          </div>
        </div>

        <div className='w-96 flex justify-center h-52 bg-black mt-32 hover:h-96 overflow-hidden rounded-md group '>
          <animated.div style={style} className='w-32 h-[35rem] bg-cyan-500 mt-[-8rem] shadow-2xl blur-md shadow-cyan-900'></animated.div>
          <div className='w-[23.7rem] h-[12.75rem] bg-slate-800 group-hover:h-[23.75rem] rounded-md absolute mt-0.5'></div>

          <div className='absolute text-center text-lg font-bold mt-[6.2rem] text-white'>
            <h1>Hem Bahadur</h1>
            <h1>Front End Developer</h1>
            <ButtonGroup size="small" className='flex justify-center mt-2'>
              <Button variant="contained" href="https://github.com/BlackBeast96">Follow</Button>
              <Button href="https://github.com/BlackBeast96?tab=repositories" >Projects</Button>
            </ButtonGroup>

          </div>
          <div className='skills text-start mt-[12.3rem] divide-y absolute ml-[-10px] font-bold text-white text-xl group-hover:visible invisible '>
            <h1 className='text-2xl text-cyan-500'>Skills</h1>
            <div className='pl-4'>
              <li>Java Script</li>
              <li>React Js</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind Css</li>
            </div>
          </div>
        </div>
      </div>
    </>
  )





}

export default App