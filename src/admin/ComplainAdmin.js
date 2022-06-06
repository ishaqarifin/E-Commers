import React, { useEffect, useState } from 'react'
import Chat from '../components/complain/Chat';
import NavbarAdmin from './NavbarAdmin';
// import package here
import { io } from 'socket.io-client'
import Contact from '../components/complain/Contact';
// init variable here
let socket

function ComplainAdmin() {
  
  const [contact, setContact] = useState(null) // data contact yang diklik
  const [contacts, setContacts] = useState([]) // data contact dari server

  useEffect(() => {
    socket = io('http://localhost:5001')
    loadContacts()
    return () => {
        socket.disconnect()
    }
}, [])

const loadContacts = () => {
  socket.emit("load customer contacts")
  socket.on("customer contacts", (data) => {
    console.log(data);
      let dataContacts = data.map((item) => ({
          ...item,
          message: "Click here to start message"
      }))
      setContacts(dataContacts)
  })
}

const onClickContact = (data) => {
  setContact(data)
}
  return (
    <>
      <NavbarAdmin />
      <div className="flex justify-center">
        <Contact dataContact={contacts} clickContact={onClickContact} contact={contact} />
        {/* <div class="w-9/12 border-l-2 p-2">right</div> */}
        <Chat />
      </div>
    </>
  );
}

export default ComplainAdmin