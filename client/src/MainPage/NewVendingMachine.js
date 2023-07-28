import { useContext } from 'react'
import { AllVendingMachineContext } from '../Context/all_vending_machines'

function NewVendingMachine() {
  const { modifyVendingMachineState } = useContext(AllVendingMachineContext)
  function handleFormSubmit(e) {
    e.preventDefault()
    //console.log(e.target[0].value)
    fetch('/vending_machines', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name: e.target[0].value})
    }).then(rspns => {
      if (rspns.ok) rspns.json().then(newVendingMachine => 
        modifyVendingMachineState(getter => [...getter, newVendingMachine]))
      else rspns.json().then(rspns => alert(rspns.errors))
    })
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h4>New Vending Machine</h4>
      Name: <input /><input type='submit'/>
    </form>
  );
}

export default NewVendingMachine;
