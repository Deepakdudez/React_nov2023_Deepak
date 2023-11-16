import {useState} from 'react';
function Toogle()
{
    const[showMessage,setShowMessage]=useState(false);
    const changeshowMessage=()=>
    {
        setShowMessage(!showMessage);
    }
    return(
        <div>
        <h1>DashBoard</h1>
        <hr>
        </hr>
        <button onClick={changeshowMessage}>
            {showMessage?"HideMessage":"Show Message"}
        </button>
        {showMessage && <p>Hi Hello</p>}
        </div>
    )
}
export default Toogle