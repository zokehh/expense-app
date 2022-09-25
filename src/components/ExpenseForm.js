import React, {useState} from 'react'
import './ExpenseForm.css'
import Expense from './Expense'

export default function ExpenseForm(props) {

    const [isEditing, setIsEditing] = useState(false)

    function changeStateHandler() {
        setIsEditing(prevState => !prevState)
    }

    return (
        <div>
            <div className='expense-container'>
            {!isEditing && <button className='new-expense' onClick={changeStateHandler}>Add New Expense</button>}
                {isEditing && <Expense changeStateHandler={changeStateHandler} addExpenseHandler={props.addExpenseHandler} />}
            </div>
        </div>

    )
}