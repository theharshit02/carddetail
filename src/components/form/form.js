import React, { useState } from 'react'
import styles from './form.module.css'

const Form = () => {

    const [holderName, setholderName] = useState("")
    const [cardNumber, setcardNumber] = useState("")
    const [month, setmonth] = useState("")
    const [year, setyear] = useState("")
    const [cvc, setcvc] =useState("")
    const [err, seterr] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(typeof cvc);
        if(holderName.length === 0 || cardNumber.length === 0 || month.length === 0 || year.length===0 || cvc.length === 0){
            seterr(true)
        }
        else seterr(false)

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>CARDHOLDER NAME</p>
        <input onChange={(e)=>setholderName(e.target.value)} placeholder='e.g. Jane Appleseed' className={styles.inputBoxBig} type="text" /><br/>
        {err&&holderName.length<=0 ? <label>Enter Card Holder Name</label>:""}
        
        <p>CARD NUMBER</p>
        <input onChange={(e)=>setcardNumber(e.target.value)} placeholder='e.g. 1234 5678 9123 0000' className={styles.inputBoxBig} type="number" /><br/>
        {err&&cardNumber.length<=0 ? <label>Enter Card Number</label>:""}

        <div className={styles.information}>

            <div>
                <p>EXP DATE (MM/YY)</p>
                <div className={styles.information}>
                    <div>
                        <div>
                            <input onChange={(e)=>setmonth(e.target.value)} placeholder='MM' className={styles.inputBoxSmall} type="number" />
                        </div>
                        {err&&month.length<=0 ? <label>Enter Month</label>:""}
                    </div>

                    <div>
                        <div>
                            <input onChange={(e)=>setyear(e.target.value)} placeholder='YY' className={styles.inputBoxSmall} type="number" /><br/>
                        </div>
                        {err&&year.length<=0 ? <label>Enter Year</label>:""}
                    </div>
                </div> 
            </div>
            
            
            
            <div className={styles.cvc}>
                <div>
                    <p>CVC</p>
                    <input onChange={(e)=>setcvc(e.target.value)} placeholder='e.g. 123' className={styles.inputBoxSmall} type="number" /><br/>
                </div>
                {err&&cvc.length<=0 ? <label>Enter CVC</label>:""}
            </div>
        </div>
        
       
        
        <br/><br/>
        <button className={styles.button} type="submit">Confirm</button>
      </form>
    </div>
  )
}

export default Form