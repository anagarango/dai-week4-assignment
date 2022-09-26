import { Button } from 'semantic-ui-react'
import {useRouter} from 'next/router'
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

  return (
    <div>
      <Button color={c} onClick={()=>HandleButton()}>{btn_text}</Button>
      <Segment>
        {/* <Dimmer active> */}
          {logInState === "during" && <Loader />}
        {/* </Dimmer> */}
      </Segment>
    </div>
  )
}
