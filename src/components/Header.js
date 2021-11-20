import React from 'react'

const Header = () => {

    let companyName = "TNI" //jsx string
    // const companyAddress = <p>Bangkok</p>
    // let numgber = 10

    const showMessage = () =>{
        return companyName + ".com"

    }//Arrow Function

    return (
        <div>
            <h1>Hello  {showMessage()}</h1>
            {/* {companyAddress} */}
            {/* {numgber*2}  */}
           

            <hr/>
        </div>
    )
}

export default Header
