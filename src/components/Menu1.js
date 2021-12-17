import React from 'react'

const Menu1 = () => {

    const [hover, setHover] = React.useState()

    const mouseOver = ()=> {

        setHover(true)
    }

    const mouseOut = () => {
        setHover(false)
    }
    
    return (
        <div>
            <h1>Menu</h1>
            {
                hover ? <h3>Welcome</h3> : null
            }
            <img onMouseOver={mouseOver} onMouseOut={mouseOut} src="./logo192.png" alt="logo"/>
        </div>
    )
}

export default Menu1
