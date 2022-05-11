import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import logo from '../assets/logo.svg'

function Score() {
  const score = useSelector(state => state.game.score)
  
  console.log(score)
  return (
    <div className='container'>
        <div className="row">
            <div className="mt-5 general-frame shadow">
                <img  src={logo} />
                <div >
                    <div className="score-frame shadow">
                        <h3>SCORE</h3>
                        <h2 className='mx-auto'>{score}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Score