import { Button, Loader, Input, View } from 'semantic-ui-react'
import styled from 'styled-components'

export default function LoginForm({
    logInState="before",
    onLogInClick=()=>{}
}){

  const Box = styled.div`
    width: 20%;
    height: 10%;
    background-color: beige;
    display:flex;
    flex-direction: column;
    padding: 1%
    `

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


    return 
    <View>
        <Box>
          <h3>Login Form</h3>
          <Input disabled={logInState !== "before"} placeholder="email"></Input>
          <Input disabled={logInState !== "before"} placeholder="password"></Input>
          <Button color={c} onClick={onLogInClick}>{btn_text}
          {logInState === "during" && <Loader active/>}
          </Button>
        </Box>
    </View>
}


