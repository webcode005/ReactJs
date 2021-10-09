import React from "react";

export default class Form extends React.Component
{

        constructor()
        {
            super();
            this.state={
                name:null,
                email:null
            }
        }

        frmSubmit()
        {
            console.log(this.state);
        }

        render()
            {
                return (
                    <div style={{textAlign:'center'}}>
                            <h1>Contact us</h1>
                            <input onChange={(e)=>this.setState({name:e.target.value})} type="text" name="name" Placeholder="Name"/>
                            <br/><br/>
                            <input onChange={(e)=>this.setState({email:e.target.value})} type="text" name="email" Placeholder="Email"/>
                            <br/><br/>
                            <button onClick={()=>this.frmSubmit()}>Submit</button>
                    </div>
                );
            }
}

