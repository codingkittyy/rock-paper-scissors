import React from 'react'

import rock from '../assets/icon-rock.svg'
import paper from '../assets/icon-paper.svg'
import scissors from '../assets/icon-scissors.svg'
import { useSelector } from 'react-redux'

function ResultCard() {
    const PCSelection = useSelector(state => state.game.PCSelection)

  return (
    <div>
         {PCSelection === 'Rock' ? 
          <div title="Rockk" className="option Rock selectable " >
            <img src={rock} />
          </div> :
          PCSelection === 'Paper' ?
          <div title="Paperr" className="option Paper selectable " >
            <img src={paper} alt='paper'/> 
          </div> :
          PCSelection === 'Scissors' &&
          <div title="Scissorss" className="option Scissors selectable " >                            
            <img  src={scissors} />
          </div>
        }
    </div>
  )
}

export default ResultCard