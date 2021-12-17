import React from 'react'

const Sidebar = () => {

    //let fullname = 'John'

    const [fullname, setFullname] = React.useState('John')

    const [isShow, setIsshow] = React.useState(true)

    const changeName = () =>{
        //fullname = 'Marry'
        setFullname('Marry')
        setIsshow(false)

    }

    React.useEffect(() => {
        console.log("Sidebar useEffect")
        //ทำงานทุกครั้งที่มีการอััพเกรด UI
    }) 

    React.useEffect(() => {
        console.log("Sidebar useEffect one time only")     
        //ทำงานเเค่ครั้งเเรกครั้งเดียว
    },[])

    React.useEffect(() => {
        console.log("Sidebar useEffect fullname")     
        //ทำงานเมื่อฟูลเนมเปลี่ยน
    },[fullname])


    return (
        <>
             <p> Hello {fullname}</p>
             {
                 isShow ?  <p>Hello</p> : <p>World</p>
             }
             <button onClick={changeName}>Change Name</button>
        </>
    )
}

export default Sidebar
