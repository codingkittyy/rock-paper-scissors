import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify'


export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        items: ["Rock", "Paper", "Scissors"],
        score: 0,
        PCSelection: '',
        userSelection: '',
        playerWin: '',
        countdown: 3,
    },
    reducers: {
        setPCSelect: (state, action) => {
            state.PCSelection = state.items[Math.floor(Math.random()*state.items.length)]
        },
        setUserSelect: (state, action) => {
            state.userSelection = action.payload
        },
        compareResults: (state, action) => {
            if(state.userSelection === 'Rock' && state.PCSelection === 'Scissors' || 
            state.userSelection === 'Paper' && state.PCSelection === 'Rock' ||
            state.userSelection === 'Scissors' && state.PCSelection === 'Paper'){
                state.score = state.score + 1
                state.playerWin = 'You Win!'
                toast.success('🦄 Wow so easy!', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
            if(state.PCSelection === 'Rock' && state.userSelection === 'Scissors' || 
            state.PCSelection === 'Paper' && state.userSelection === 'Rock' ||
            state.PCSelection === 'Scissors' && state.userSelection === 'Paper'){
                state.score =  state.score - 1
                state.playerWin = 'You Loose'
                toast.error('PC WON! YOU LOOSER!', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
            if(state.userSelection === state.PCSelection){
                state.score = state.score
                state.playerWin = 'Draw' 
                toast.warn('Draw!', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                }
        

        },
        countDown: (state, action) => {
            state.countdown = state.countdown - 1
            if(state.countdown === 0){
                 state.countdown = 0
            }
        },

    }
})

export const {countDown,compareResults, setPCSelect, setUserSelect} = gameSlice.actions
export default gameSlice.reducer