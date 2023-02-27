import React from 'react'

const Greeting = (props) => {  
    return ( <h1>hello my fried {props.name}</h1>)
}


const Greetings = () => {
  return (
    <main>
      <Greeting name="mohamed" />
        <Greeting name="ahmed" />
        <Greeting name="ali" />
        <Greeting name="mohamed again" />

    </main>
  )
}

export default Greetings