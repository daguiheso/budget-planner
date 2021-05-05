import React, { useState } from 'react'
import budgetContext from './context'

const BudgetState = ({ children }) => {

    const [expenses, setExpenses] = useState([
        { id: 12, name: 'Compras', cost: 10 },
        { id: 13, name: 'Navidad', cost: 200 },
        { id: 14, name: 'Lavado de carro', cost: 40 },
    ]) 

    const [money, setMoney] = useState({
        budget: 2000,
        remaining: 2000,
        limit: 1000
    })

    return (
        <budgetContext.Provider value={{
            expenses,
            money,
            setExpenses,
            setMoney
        }}>
            { children }
        </budgetContext.Provider>
    )
}

export default BudgetState;