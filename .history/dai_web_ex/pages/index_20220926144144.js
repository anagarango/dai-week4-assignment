import { Button } from 'semantic-ui-react'
import {useRouter} from 'next/router'

// The router and states are mostly used in the page for data/information state management
import {useState} from 'react'

export default function Home() {

  //before, during, after
  const [logInState, setLogInState] = useState("before")

  return (
    <div>
      <Button color="blue">Click Here</Button>
    </div>
  )
}
