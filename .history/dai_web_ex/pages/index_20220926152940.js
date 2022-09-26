import { Button } from 'semantic-ui-react'
import {useRouter} from 'next/router'
import LoginForm from '../comps'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

// The router and states are mostly used in the page for data/information state management
import {useState} from 'react'

export default function Home() {
  const r = useRouter();
  //before, during, after
  const [logInState, setLogInState] = useState("before")

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

  const HandleButton = () =>{
    if (logInState === "before"){
      setLogInState("during");
      
    }
    if (logInState === "during"){
      setLogInState("after");

    }
    if (logInState === "after"){
      r.push("/dashboard")
    }
  }

  // async = when it takes time to connect to a server
  const Login = async () => {
    setLogInState("during");
    // its going to take time
    // mock of the time passing -> this code is useless and doesnt do anything
    await new Promise(resolve=>setTimeout(resolve, 3000))

    setLogInState("after");
    // its going to stall for 1-2 seconds
    await new Promise(resolve=>setTimeout(resolve, 2000))

    r.push("/dashboard")

  }

  return (
    <div>
      <Button color={c} onClick={()=>Login()}>{btn_text}
      {/* <Segment>
        <Dimmer active> */}
          {logInState === "during" && <Loader active/>}
        {/* </Dimmer>
      </Segment> */}
      </Button>
      <LoginForm logInState={logInState}></LoginForm>
      
    </div>
  )
}
