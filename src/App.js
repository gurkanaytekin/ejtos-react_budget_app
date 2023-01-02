import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllocationForm from './components/AllocationForm'
import Budget from './components/Budget'
import ExpenseItem from './components/ExpenseItem'
import ExpenseList from './components/ExpenseList'
import ExpenseTotal from './components/ExpenseTotal'
import Remaining from './components/Remaining'
import './App.css'
// Add code to import the components
import { AppProvider } from './context/AppContext';
import BudgetMetaInformation from './components/BudgetMetaInformation';
import Currency from './components/Currency';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <h2>
                    Company's Budget Allocation
                    </h2>
                </div>
                <BudgetMetaInformation>
                    <Budget />
                    <Remaining />
                    <ExpenseTotal />
                    <Currency />
                </BudgetMetaInformation>
                <ExpenseList />
                <AllocationForm />
            </div>
        </AppProvider>
    );
};
export default App;