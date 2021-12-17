import React from "react"

function useHover(){

    const [hover, setHover] = React.useState()

    const mouseOver = ()=> {

        setHover(true)
    }

    const mouseOut = () => {
        
        setHover(false)
    }

    return[hover, mouseOver, mouseOut]
}
export default useHover