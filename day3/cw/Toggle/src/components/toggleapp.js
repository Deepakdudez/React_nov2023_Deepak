import {useState} from 'react'
function Toogle()
{    
    const[name,SetName]=useState("kaioken");
    const[num,setNum]=useState(0)

    const namehandler=()=>
    {    
        let value=num;
        setNum(++value);
        if(value===4)
        {
        if(name==='kaioken')
        SetName("superSaiyan")
        else
        SetName('kaioken');
        setNum(0);
        }

    }
    return(   
        <div>
            <h1>ToggleApp</h1>
            <hr></hr>
        <h1>{name}</h1>
        <button onClick={namehandler}>Toogle</button>
        </div>
    ) 
        
}
export default Toogle