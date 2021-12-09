import React from 'react'
import Logo from './Logo'

const Header = () => {

    let companyName = "TNI" //jsx string
    // const companyAddress = <p>Bangkok</p>
    // let numgber = 10

    const showMessage = () =>{
        return companyName + ".com"

    }//Arrow Function

    const isLogin = true;

    const showMe = () => {
        alert('Hello React')
    }

    const products = [
        {id: 1, name:"Coke"},
        {id:2 ,name:"Pepsi"}
    ]

    return (
        <div>
            <h1>Hello  {showMessage()}</h1>
            {/* {companyAddress} */}
            {/* {numgber*2}  */}

            {/* Short term if statement
             {
                isLogin && (
                    <>
                        <p>Welcome , </p>
                        <p>Student</p>
                    </>
                )
            }
            */}

            {
                isLogin === true ?(
                    <>
                    <p>Hello </p>
                    <p>Student</p>
                    </>
                ) : (
                    <>               
                    <p>Hello</p>
                    <p>Teacher</p>
                    </>
                )
            }

            {
                isLogin ? <Logo/> : <p>Unlock</p>
            }

            <button onClick={showMe}>Click Me!</button>

            {/* return array element */}
           <ul>
           {
                products.map( (product,index) => {
                    return(<li key={product.id}>{index+1} {product.name}</li>)
                })
            }
           </ul>

            <hr/>
        </div>
    )
}

export default Header
