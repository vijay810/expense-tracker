const ExpenseForm = () =>{
    return(
        // <form>
        //     <div>
        //         <label htmlFor="expName">
        //             <input type={}>
        //             </input>
        //         </label>
        //     </div>
        // </form>
        <form>
            <div>
                <label htmlFor="expName">Expense Name: </label>
                <input type ="text" id="expName" placeholder="Enter your Expense Name"></input>
            </div>
            <div>
                <label htmlFor="expAmt">Expense Amount: </label>
                <input type="number" id="expAmt" placeholder="Enter your Expense Amt"></input>
            </div>
            <div>
                <label htmlFor = "expDate"> Expense Date: </label> 
                <input type="date" id="expDate"></input>
            </div>
            <button type="submit"> Add Expense</button>
        </form>

    )
}
export default ExpenseForm;