import React, { useState } from 'react'
import request from 'superagent'

function UserForm () {
  const [purchase, setPurchase] = useState({
    quantity: 0,
    dollar_amount: 0
  })

  function clickHandler () {
    request.post('/api/v1/purchases')
      .send(purchase)
      .set('Accept', 'application/json')
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  function onChange (e) {
    const { name, value } = e.target
    setPurchase({
      ...purchase,
      [name]: Number(value)
    })
    console.log(purchase)
  }

  return (
    <div className='forms'>
      <form >
        <div>
          <label htmlFor='name'>Eth amount:</label>
          <input type='number' className='form-input' onChange={onChange} id='quantity' name='quantity' />
        </div>
        <label htmlFor='name'>Purchase price:</label>
        <input type='number' className='form-input' onChange={onChange} id='dollar_amount' name='dollar_amount' />
        <button onClick={clickHandler} className='form-submit-btn'>Add to portfolio</button>
      </form>
    </div>
  )
}

export default UserForm
