import { Button, Loader } from 'semantic-ui-react'

export default function LoginForm({
    logInState="before",
    onLogInClick=()=>{}
}){

    var c = "blue"
    var btn_text = "Click Me"

  if(logInState === "before"){
    c = "red";
  } if(logInState === "during"){
    c = "yellow";
    btn_text = "Waiting..."
  } if(logInState === "after"){
    c = "green";
    btn_text = "Transferring you to Dashboard!"
  }


    return <div>
        <h3>Login Form</h3>
        <Input disabled={logInState !== "before"} placeholder="email"></Input>
        <Input disabled={logInState !== "before"} placeholder="password"></Input>
        <Button color={c} onClick={onLogInClick}>{btn_text}
        {logInState === "during" && <Loader active/>}
        </Button>
        
    </div>
}


