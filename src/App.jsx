import LoginForm from "./LoginForm"

function App(){
  return (
    <div>
      <h1>OZEX</h1>
       <LoginForm/>  

       <label className="b-text">
        Vous n'avez pas de compte? <a href="https://www.ozex.ca">Inscrivez-vous</a> maintenant.
      </label>       
    </div>

    
    ) 
}

export default App

