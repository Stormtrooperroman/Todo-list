import React from 'react';


class CHECK extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            dataType: this.props.dataType,
            inputValue: "",
        }
    }


    addCheck = () => {
        if(this.state.inputValue!==""){
            this.setState(state => {
                const dataType = state.dataType.concat({text:state.inputValue});
                return {
                    dataType,
                    inputValue:"",
                };
              });
        }
        
        };

    render(){
        const elems=this.state.dataType.map( (item, index)=>{
            return(
                
                    <div class="d-flex justify-content-between"> 
                         <div style={{width: '320px'}}>
                            <input id={"inplist"+index} type="checkbox"/>
                            <label htmlFor={"inplist"+index}>{item.text}</label> 
                         </div>
                         <div  style={{width: '80px'}}>
                            <span><i class="fas fa-pencil-alt"></i></span>
                            <span><i class="fas fa-times-circle"></i></span>
                        </div> 
                         <br/>
                    </div>
                
                
            )
        });

    return(
        <div id="Done">
            
                <h1>Done</h1>
                <form class="form-inline my-2 my-lg-0">
                    <input value={this.state.inputValue} onChange={(event)=> {this.setState({inputValue:event.target.value})}} class="form-control mr-sm-2" type="text"  placeholder="Enter your plans" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" id="button" onClick={this.addCheck.bind(this)} type="button">Enter</button>
                </form>
                {elems}
            
             
        </div>
    );
    }
}


// const Check=({dataType})=>{
//     const elems=dataType.map( (item, index)=>{
//             return(
//                 <div><input id={"inplist"+index} type={item.type}/><label htmlFor={"inplist"+index}>{item.text}</label> <br/></div>
                
//             )
//         }
//     );

//     return(
//         <div id="Done">
//             <p>
//                 <h1>Done</h1>
//                 {elems}
//             </p>
             
//         </div>
//     );
// }

export default CHECK