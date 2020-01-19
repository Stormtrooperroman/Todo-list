import React, {Component} from 'react';

class TODO extends Component{
    constructor(props){
        super(props);
        
        this.state ={
            dataTodo: this.props.dataTodo,
            inputValue: "",
        }
        
    }
    addTODO = () => {
        if(this.state.inputValue!==""){
            this.setState(state => {
                const dataTodo = state.dataTodo.concat({text:state.inputValue, some:true});
                return {
                    dataTodo,
                    inputValue:"",
                };
              });
        }
        
        };
    deleteTODO=(event)=>{
        let someId=parseInt(event.target.id.replace("del",""));
        this.setState(state => {
            const unDeleted=state.dataTodo.splice(someId, 1);
            return{
                unDeleted,
            };
        });
    }
    important=(event)=>{
        let someId=parseInt(event.target.id.replace("imp",""));
        
    }
    render(){
        

        const Styles={
            color: "red",
        };
        
        const elems = this.state.dataTodo.map( (item, index)=>{
                 return(
                     <div class="d-flex justify-content-between"> 
                         <div style={{width: '320px'}}>
                            <input  type="radio"  id={"toIndex" + index}/>
                            <label htmlFor={"toIndex"+index} style= {item.some ? Styles:{}}>{item.text}</label>
                         </div>
                         <div  style={{width: '80px'}}>
                            <span id={"pen" + index}  class="fas fa-pencil-alt"></span>
                            <span id={"imp" + index} onClick={this.important.bind(this)} class="fab fa-d-and-d"></span>
                            <span id={"del" + index}  onClick={this.deleteTODO.bind(this)} class="fas fa-times-circle"></span>
                        </div> 
                         <br/>
                    </div>
                 )
            });
        return(
            <div id="TodoList">
                <h1>ToDo</h1>
                <form class="form-inline my-2 my-lg-0">
                    <input value={this.state.inputValue} onChange={(event)=> {this.setState({inputValue:event.target.value})}} class="form-control mr-sm-2" type="text" placeholder="Enter your plans" aria-label="Search"/>
                    <button  class="btn btn-outline-success my-2 my-sm-0" id="button" type="button" onClick={this.addTODO.bind(this)}>Enter</button>
                </form>
                {elems}
                
            </div>
    
        );
    
       
    }    
}


// const TodoList=({dataTodo})=>{
//     const Styles={
//         color: "red",
//         border: "dashed  red  ",
//     }

//     const elems = dataTodo.map( (item)=>{
//         return(
//             <li style= {item.some ? Styles:{}}>{item.text}</li>
//         )
//     });


//     return(
//         <div id="TodoList">
//             <h1>ToDo</h1>
//             <ul>
//                 {elems}
//             </ul>
//         </div>

//     );
// }
// 

export default TODO
