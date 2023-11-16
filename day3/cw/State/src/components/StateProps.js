import {useState} from 'react'

function State()
{
    const[name,setName]=useState("Ahamed");
    

    const[num,setNum]=useState(0);
    
    const[student,setStudent]=useState({name:"Akash",age:"16"})
    const namehandler=()=>
    {
    setName("Akash Ak");
    }
    const numhandler=()=>
    {
        let value=num;
        setNum(++value);
    }
    const studenthandler=()=>
    {
        setStudent({name:"Dinesh",age:"19"})
    }
    return(
        <div>
            <h1>StateProp</h1>
            <hr></hr>
            <h2>Hi {name}</h2>
            <h2>The number is {num}</h2>
            <h2>Name is {student.name} and age is {student.age} and he is from {city}</h2>
            
            <button onClick={namehandler}>Change Name</button><br></br><br></br>
            <button onClick={numhandler}>Increment Number</button><br></br><br></br>
            <button onClick={studenthandler}>Change the Student Details</button>

        </div>
    )
}
export default StateProps