import {useState} from "react";
const ExpenseForm = () =>{
    let [expName, setExpName] = useState("N");
    console.log(expName);
    function expNameHandler(e){
        // console.log(e.target.value);
        // expName =  e.target.value
        // console.log(`ExpName val:${expName}`);
        // OR
        // console.log('ExpName val:', expName)
        setExpName(e.target.value);
        setTimeout(()=> console.log(expName),5000);
        console.log(`ExpName val: ${expName}`);
    }

    let [expAmt, setExpAmt] = useState("Amount");
    console.log(expAmt);
    function expAmountHandler(e){
        // console.log(e.target.value);
        // expName =  e.target.value
        // console.log(`ExpAmt val:${expAmt}`);
        // OR
        // console.log('ExpName val:', expName)
        setExpAmt(e.target.value);
        console.log(`ExpAmount val: ${expAmt}`);
    }
    
    let [expDate, setExpDate] = useState("Date");
    console.log(expDate)
    function expDateHandler(e){
        setExpDate(e.target.value);
        console.log(`ExpDate val: ${expDate}`);
    }

    return(
        <form id="one">
            <div>
                <label htmlFor="expName">Expense Name: </label>
                <input type ="text" id="expName" placeholder="Enter your Expense Name" onInput={expNameHandler}></input>
            </div><br></br><br></br>
            <div>
                <label htmlFor="expAmt">Expense Amount:</label>
                <input type="number" id="expAmt" placeholder="Enter your Expense Amount" onChange={expAmountHandler}></input>
            </div><br></br><br></br>
            <div>
                <label htmlFor= "expDate">Expense Date:</label> 
                <input type="date" id="expDate" onChange={expDateHandler}></input>
            </div><br></br><br></br>
            <div>
                <center><button type="submit"> Add Expense</button></center>
            </div>
            <p>{expName}</p>
            <p>{expAmt}</p>
            <p>{expDate}</p> 
        </form>

    )
}
export default ExpenseForm;