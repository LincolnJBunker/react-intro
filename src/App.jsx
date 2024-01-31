import RedButton from "./RedButton.jsx"
import Clicker from "./clicker.jsx"

function App() {
  
  return (
    <>
      <h2>welcome to ON3P skies</h2>
      <RedButton message="Wassup" alertMessage="babygirl"/>
      <RedButton message="HEYOO" />
      <RedButton message="MEW" alertMessage="yes" />
      <RedButton message="YouTube" />

      <Clicker initCount={5} />
      <Clicker initCount={21}/>
      <Clicker />
    </>
  )
}

export default App
