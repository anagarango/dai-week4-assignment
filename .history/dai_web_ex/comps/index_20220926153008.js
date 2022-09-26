import { Button, Loader } from 'semantic-ui-react'

export default function LoginForm({
    logInState="before"
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
        <Button color={c} onClick={()=>Login()}>{btn_text}
        {logInState === "during" && <Loader active/>}
        </Button>
        
    </div>
}