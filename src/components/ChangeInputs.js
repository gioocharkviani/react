import React from 'react'

const ChangeInputs = () => {
  return (
    <div className='changeINputs'>
      <label for='title'>Change title :</label>
      <input type='text' id='title' />
      <label for='Amount'>Change Amount :</label>
      <input type='text' id='Amount' />
    </div>
  )
}

export default ChangeInputs
