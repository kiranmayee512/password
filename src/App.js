import React, { Component } from 'react';
class RandomList extends Component{
    constructor(){
        super();
        this.state={
            characters:'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ()[]',
            Passwordlength:10,
            password:[]
        }
    }
    ChangePassword=()=>{
        const reqString=this.random(this.state.Passwordlength);
        const pp=[...this.state.password,reqString]
        this.setState({
            password:pp
        })
    }
    random = (length) => {
        let chars =this.state.characters;
        let str = '';
        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str;
    };
    RemovePassword = (passwordselected) => {
       const remove=this.state.password.filter((val)=>{
           return val!=passwordselected
       })
       this.setState({
           password:remove
       })
    };
   render(){
       return(
           <div>
<h1>GENERATE PASSWORD</h1>
<button onClick={this.ChangePassword}>generate</button>
<ul>
        {
            this.state.password.map((passwords)=>{
                return (
                    <div style={{display:"flex"}}>
                        <li>{passwords}</li>
                        <button  onClick={()=>{this.RemovePassword(passwords)}}>RemovePassword</button>
                    </div>
                )
            })
        }
</ul>
           </div>
       )
   }
}
export default RandomList;