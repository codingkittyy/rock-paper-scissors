import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { compareResults, setPCSelect, setUserSelect } from '../redux/gameSlice'

// ASSETS
import triangle from '../assets/bg-triangle.svg'
import rock from '../assets/icon-rock.svg'
import paper from '../assets/icon-paper.svg'
import scissors from '../assets/icon-scissors.svg'

import Modal from './Modal/Modal'
import {Link} from 'react-router-dom'


function Body() {
const dispatch = useDispatch()

const userSelection = useSelector(state => state.game.userSelection )
const PCselection = useSelector(state => state.game.PCSelection )
const playerWin = useSelector(state => state.game.playerWin )


console.log(userSelection)
console.log(PCselection)
console.log(playerWin)


const handleClick = (e) => {
    dispatch(setPCSelect())
}

  return (
    <div className='container'>
        <div className="row">
            <div className="step1 col-12">
                <div className='step1-container'>
                    <img src={triangle} alt="" />
                        <div className="step1-options" >
                            <Link to='/results' className='me-5'>
                                <div title="Paper" className="option Paper selectable " id='Paper'
                                    onClick={(e) => (handleClick(), dispatch(setUserSelect('Paper')))} >
                                <img src={paper} alt='paper'/> 
                            </div>
                            </Link>
                            <Link to='/results' className='ms-5'>
                                <div title="Scissors" className="option Scissors selectable " id='Scissors'
                                    onClick={() => (handleClick(), dispatch(setUserSelect('Scissors')))}>                            
                                <img  src={scissors} />
                            </div>
                            </Link>
                            <Link to='/results' className='mt-5'>
                                <div title="Rock" className="option Rock selectable " id='Rock'
                                    onClick={() => (handleClick(), dispatch(setUserSelect('Rock')))}>
                                <img src={rock} />
                                </div>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body

