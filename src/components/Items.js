import Date from './CardDate' ;
import React , {useState} from 'react'
import ChangeInputs from './ChangeInputs';

const Items = (props) => {

  const [title , setTitle] = useState(props.Title);
  const [Ammount , setamount] = useState(props.Ammount);

  const ChangeInputsTitle = document.querySelector('#title');
  const ChangeInputsAmount = document.querySelector('#Amount');

  const ChangeTitle = () =>{
    setTitle(ChangeInputsTitle.value)
    setamount(ChangeInputsAmount.value)
    console.log(title);
  }

  return (
    <div className='Card'>
     <div className='card-item'><p>title : {title}</p></div>
     <div className='card-item amount'><p>amount : {Ammount} $</p></div>
     <Date Date={props.Date} />

    <button onClick={ChangeTitle}>Change title</button>

    </div>
  )
}

export default Items
