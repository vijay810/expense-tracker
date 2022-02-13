function ExpenseView(props){
    // console.log(props.setExpDataFun);
    console.log(props.data);
    return(
        <div>
        {props.data.length>0 ?(
            // react fragment <> </>
            <div class="list">
                {props.data.map((d,i)=>(
                <ul key ={d._id}>
                    {/* //Unique Id in Html <ul id=i> using React <ul key={i}. */}
                    {/* <li>Expense Name:  {props.data[0].expName}</li> */}
                    {/* <li contentEditable>Expense Name:  {d.expName}</li> */}
                    <li>Expense Name:  {d.expName}</li>
                    <li>Expense Amount:  {d.expAmt}</li>
                    <li>Expense Date: {d.expDate}</li>
                    {/* <li>Expense Date: {props.data[0].expDate}</li> */}
                     <center><button onClick={()=> props.deleteExpFn(d._id)}> delete </button></center>
                     <center><button onClick={()=> props.editExpFn(d)}> edit</button></center>
                </ul>))}
            </div>
        ):(<h2> No Expenses Found</h2>)}
        </div>
    )
};

export default ExpenseView;