import {useEffect, useState} from "react";
import ExpenseForm from './ExpenseForm';
import ExpenseView from './ExpenseView';


function App() {
  const[expData, setExpData]=useState([])

  async function getData(){
    const resp = await fetch(`http://localhost:3002/`);
    const respObj = await resp.json();
    console.log(respObj);
    setExpData(respObj.listofexpenses);
  }
  //useEffect
  //it is used to hansdle use effect
  useEffect( () =>{
    getData();
  },[])//empty Dependencies array only one fuction can run

  const saveData = async (newExpData) => {
    const resp = await fetch(`http://localhost:3002/saveExpense`,{
      headers:{
        "Content-Type": "application/json",
        "Accept" : "application/json"
      },
      method: 'POST',
      body:JSON.stringify(newExpData)

    });
    const respObj = await resp.json();
    console.log(respObj);
    getData();
  }



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
    <ExpenseForm setExpDataFun ={setExpData} expenseData={expData} saveDataFn={saveData}></ExpenseForm>
    <ExpenseView data={expData}></ExpenseView>
  </section>
    

  );
}

export default App;
