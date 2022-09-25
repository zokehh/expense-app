import React, {useState} from 'react'
import ExspenseItem from './components/ExpenseItem'
import ExpenseForm from './components/ExpenseForm'
import './style.css'

const exspenses = [
    {
        id : "1",
        title : "New TV",
        amount : 1299.99,
        date : new Date(2020, 7, 14)
    },
    {
        id : "1",
        title : "New Dog",
        amount : 149.99,
        date : new Date(2022, 5, 28)
    },
    {
        id : "1",
        title : "Microwave",
        amount : 120.99,
        date : new Date(2020, 2, 21)
    },
    {
        id : "1",
        title : "New Remote",
        amount : 19.29,
        date : new Date(2019, 8, 17)
    },
    {
        id : "1",
        title : "Programming Course",
        amount : 39.99,
        date : new Date(2022, 1, 15)
    },

]

export default function App() {

    const [expenses , setExpenses] = useState(exspenses)

    const addExpenseHandler = (newArray) => {
        setExpenses((prevExpenses) => {
          return [newArray, ...prevExpenses];
        });
      };
    
    return (
       <div className='container'>
            <ExpenseForm 
                addExpenseHandler={addExpenseHandler}
            />
            {expenses.map((exspenses) => (
                <ExspenseItem 
                    key={Math.random()}
                    title={exspenses.title}
                    amount={exspenses.amount}
                    date={exspenses.date}
                />  
            ))}
       </div> 
    )
}