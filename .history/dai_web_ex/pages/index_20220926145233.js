import { Button } from 'semantic-ui-react'
import {useRouter} from 'next/router'

// The router and states are mostly used in the page for data/information state management
import {useState} from 'react'

export default function Home() {

  //before, during, after
  const [logInState, setLogInState] = useState("before")

  var c = "blue"

  if(logInState === "before"){
    c = "red"
  } if(logInState === "during"){
    c = "yellow"
  } if(logInState === "after"){
    c = "green"
  }

  const HandleButton = () =>{
    if (logInState === "before"){
      setLogInState("during")
    }
    if (logInState === "during"){
      setLogInState("after")
    }
    if (logInState === "after"){
      setLogInState("before")
    }
  }

  return (
    <div>
      <Button color={c} onClick={()=>HandleButton()}>Click Here</Button>
    </div>
  )
}
