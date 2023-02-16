import React , {useState} from 'react'

const NewCardForm = () => {

    const [EnteredTitle , SetEnteredTitle] = useState(); 
    const [EnteredAmount , SetEnteredAmount] = useState(); 
    const [EnteredTDate , SetEnteredTDate] = useState(); 


    const ChangeTitle = (event) =>{
        SetEnteredTitle(event.target.value);
        SetEnteredAmount(event.target.value);
        SetEnteredTDate(event.target.value);
    }
    const ChangeAmount= (event) =>{
        SetEnteredAmount(event.target.value);
    }
    const ChangeDate = (event) =>{
        SetEnteredTDate(event.target.value);
    }
  return (
    <div className='AddForm'>
      <form>
        <input type='text' placeholder='Title' onChange={ChangeTitle}></input>
        <input type='number' placeholder='Amount' onChange={ChangeAmount}></input>
        <input type='date' onChange={ChangeDate}></input>
        <button type='submit'>Add New card</button>
      </form>
    </div>
  )
}

export default NewCardForm
