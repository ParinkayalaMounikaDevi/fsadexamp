import React,{Component} from "react";

class Conditional extends Component{
    f1(event){
        if(event.target.id==="f")
        {
            return document.getElementById("p1").innerHTML="u click first";
        }
        else if(event.target.id==="u")
        {
            return document.getElementById("p1").innerHTML="u click second";
        }
        else{
            return document.getElementById("p1").innerHTML=" ";
        }

        }
    render()
    {
        return(
            <div>
                <p id="p1"> </p>
                <button onClick = {this.f1} id="f">first</button>
                <button onClick = {this.f1} id="u">second</button>
                <button onClick = {this.f1} id="c">clear</button>
            </div>
        )
    }
}
export default Conditional;