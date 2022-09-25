import React, {useState} from 'react'

export default function Expense(props) {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredNumber, setEnteredNumber] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    function enteredTitleHanlder(event) {
        setEnteredTitle(event.target.value)
    }

    function enteredNumberHandler(event) {
        setEnteredNumber(event.target.value)
    }

    function endeterdDateHandler(event) {
        setEnteredDate(event.target.value)
    }


    function submitHandler(e) {
        e.preventDefault()

        
        const newArray = {
            title : enteredTitle,
            amount : enteredNumber,
            date : new Date(enteredDate)
        }
        
        props.changeStateHandler()
        
        props.addExpenseHandler(newArray)
        setEnteredTitle('')
        setEnteredNumber('')
        setEnteredDate('')
    }

    return (
        <div className='new-expense'>
            <form onSubmit={submitHandler}>
            <div className='new-expense__control'>
                <label>Title</label>
                <input className='new-expense__control'
                    id="input-text"
                    type="text"
                    value={enteredTitle}
                    onChange={enteredTitleHanlder}
                    required
                />
            </div>

            <div className='new-expense__control'>
                <label>Amount</label>
                <input className='new-expense__control'
                    id="input-number" 
                    type="number" 
                    value={enteredNumber}
                    onChange={enteredNumberHandler}
                    required
                />
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input
                    id="input-date" 
                    type="date" 
                    min="2019, 01, 01"
                    max="2022, 12, 31"
                    value={enteredDate}
                    onChange={endeterdDateHandler}
                    required
                />
            </div>
            <div className='btn-container'>
                <button className='submit-button' type='submit'>ADD</button>
                <button className='submit-button' onClick={props.changeStateHandler}>Cancel</button>
            </div>
        </form>
        </div>
    )
}