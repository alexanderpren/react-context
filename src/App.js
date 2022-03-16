import React, { Component,createContext,useContext } from 'react';
import './style.css';

const MyContext = createContext();
const languages = ["JavaScript","Python"];

export default class App extends Component {
constructor(props){
  super(props)
  this.state = {array: languages, select: false,updateMessage: this.updateMessage.bind(this)};
}


updateMessage(){
  this.setState({select:!this.state.select})
}


  render() {
    const {array,select,updateMessage} = this.state;
    return (
      <MyContext.Provider value={{array,select,updateMessage}}>
        <Button />
        <Message />       
      </MyContext.Provider >
    );
  }
}



const Button = () =>{
  const context = useContext(MyContext)

  return(
    <>
        <button name="button" onClick={()=>context.updateMessage()}>Change Language</button>
    </>
  )
}

const Message = () => {
  const context = useContext(MyContext)
  return(
  <>
   <h2> {context.select ? context.array[0]: context.array[1]} </h2>
  </>);
}


