import React,{Component} from "react"

class Condition extends Component
{
        state={
            name:"mounika"
        }
    
    render()
        {
            if(this.state.name==='mouni')
                return <div><p>hi</p></div>
            else
                return <div><p>bye</p></div>
        }
}
export default Condition;