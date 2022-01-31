import {useState} from "react";
import ExpenseForm from './ExpenseForm';
import ExpenseView from './ExpenseView';
function App() {
  const[expData, setExpData]=useState([])
  return (
    
  //   <div>
  //  <h1>Expense Tracker App</h1>
  //  <section>
  //  <ExpenseForm />
  //  <ExpenseView  />
  //  </section>
  //  </div>
  <section>
    <h1>Expense Tracker App</h1>
    <ExpenseForm setExpDataFun ={setExpData} expenseData={expData}></ExpenseForm>
    <ExpenseView data={expData}></ExpenseView>
  </section>
    

  );
}

export default App;
