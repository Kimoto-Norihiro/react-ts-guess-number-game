import React, { ChangeEvent, useState } from 'react'

const Game = () => {
    const [ans, setAns] = useState(Math.floor(Math.random()*101))

    const [guessedNumbers, setGuessedNumbers] = useState<string[]>([])
    const [guessNumber, setGuessNumber] = useState('')

    const [gameStatus, setGameStatus] = useState('')
    const [gameContinue, setGameContinue] = useState(true)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setGuessNumber(() => e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setGuessedNumbers([...guessedNumbers,guessNumber])
        checkGameStatus()
        setGuessNumber('')
    }

    const checkGameStatus = () => {
        if (Number(guessNumber) == ans) {
            setGameStatus('clear')
            setGameContinue(false)
        } else if (Number(guessNumber) > ans) {
            setGameStatus('High')
        } else {
            setGameStatus('Low')
        }
    }

    return (
        <div>
            <h1>Guess Number Game</h1>
            <div>これまでの予想：{guessedNumbers.join(' ')}</div>
            <div>ゲームの状態：{gameStatus}</div>
            {gameContinue ? 
            <form onSubmit={handleSubmit}>
            <input type="text" value={guessNumber} onChange={handleChange}/>
            <button type='submit'>submit</button>
            </form>
            :
            <></>
            } 
        </div>
    )
}

export default Game