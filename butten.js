import React,{Component} from "react";

class Butten extends Component{
    render()
    {
        return(
            <div>
                
                <button onClick={()=>{alert('first button')}}>first</button>
                <button onClick={()=>{alert('second button')}}>second</button>
                <button onClick={()=>{alert(' ')}}>clear</button>
            </div>
        )
    }
}
export default Butten;
