import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import rock from '../assets/icon-rock.svg'
import paper from '../assets/icon-paper.svg'
import scissors from '../assets/icon-scissors.svg'
import './results.css'
import {Link} from 'react-router-dom'
import { compareResults, countDown } from '../redux/gameSlice'
import ResultCard from '../components/ResultCard'


function Results() {
  const userSelection = useSelector(state => state.game.userSelection)
  const PCSelection = useSelector(state => state.game.PCSelection)
  const playerWin = useSelector(state => state.game.playerWin)

  const [counter, setCounter] = useState(3);

  // Third Attempts
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
console.log(counter)

  const dispatch = useDispatch()


  useEffect(() => {
    setTimeout(() => {
      if(userSelection != '' && PCSelection != ''){
        dispatch(compareResults())}
    }, 3000)
    
  }, [dispatch, userSelection])



  return (
    <div className='container'>
      <div className="row  ">
        <div className='d-flex align-items-center mt-5'>
        <div className="userSide mx-auto">
          <h6 className='text-white mb-4 text-center d-flex justify-content-center align-items-center mx-auto'>YOU PICKED</h6>
          {userSelection === 'Rock' ? 
          <div title="Rockk" className="option Rock selectable " >
            <img src={rock} />
          </div> :
          userSelection === 'Paper' ?
          <div title="Paperr" className="option Paper selectable " >
            <img src={paper} alt='paper'/> 
          </div> :
          userSelection === 'Scissors' &&
          <div title="Scissorss" className="option Scissors selectable " >                            
            <img  src={scissors} />
          </div>
          }
        </div>
          {counter === 0 && 
                  <div>
          <h3 className='text-white d-flex justify-content-center align-items-center text-center mx-auto'>{playerWin}</h3>
          <button className='btnPlay mt-3 shadow'><Link to='/' style={{textDecoration: 'none'}}>Play Again</Link></button>
          </div>
          }
          
        <div className="PCSide mx-auto">
        <h6 className='text-white mb-4 text-center d-flex justify-content-center align-items-center mx-auto'>THE PC PICKED</h6>
          {counter === 0 ?
          <ResultCard />  :
          <div className='circle'>
            <h1>{counter}</h1>
          </div>}
        </div>
    </div>
    </div>
    </div>
  )
}

export default Results