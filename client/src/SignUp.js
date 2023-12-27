/*
  En este archivo se crea lo que se va a renderizar para la pagina de creación de cuenta, posteriormente (mañana o pasado) hare los inputs como componentes apartes
*/
import { useState } from "react";

export default function SignUp(){

    /* Se crean variables de estado para guardar la info que da el usuario en los text inputs */
    const [name, setName] = useState("")    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   
    const create_account_and_go_to_app = async () => {
      try{
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);
      // Llamada a la api
      const response = await fetch("http://localhost:3001/SignUp", {
        mode: 'cors', 
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email, 
          password: password,
        })
      });
      if(response.ok){
        window.location.href = "/app";
      } else{
        throw new Error(`HTTP Error! Status: ${response.status}`)
      }
    } catch(e){
      console.warn(e);
    }
  }

    const handle_submit = (event) => {
      event.preventDefault();
      console.log("Submitted");
      create_account_and_go_to_app();
    }

    
    return(
      <div>
        <h1>Create an account</h1>
        <form onSubmit={handle_submit}>
          <label>Name:</label>
          <br/>
          <input
            type="text"
            placeholder="John Doe"
            onChange={(e) => {
              setName(e.target.value.replace(/[^a-zA-Z\s]/g, ""));
            }}
          required
          />        
          <br/><br/>
          <label>Email:</label>
          <br/>
            
          <input
            type="email"
            placeholder="John Doe"
            onChange={(e) => {
              setEmail(e.target.value, "");
            }}
          required
          /> 

          <br/><br/>
          <label>Password:</label>
          <br/>

          <input
            type="password"
            placeholder="John Doe"
            onChange={(e) => {
              setPassword(e.target.value, "");
            }}
          required
          /> 
       
          <br/><br/>
          <label>Confirm Password:</label>
          <br/>
          <input type="password" name="confirm_password"/>
          <br/>
          <br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
}
