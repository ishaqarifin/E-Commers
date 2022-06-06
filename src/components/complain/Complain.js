import React, { useEffect, useState } from 'react'
import Navbar from "../Navbar"
import Chat from './Chat';
// import package here
import { io } from 'socket.io-client'
import ContactAdmin from '../../admin/ContactAdmin';
// init variable here
let socket

function Complain() {

  const [contact, setContact] = useState(null) // data contact yang diklik
  const [contacts, setContacts] = useState([]) // data contact dari server

  useEffect(() => {
    socket = io('http://localhost:5001')
    loadContact()
    return () => {
        socket.disconnect()
    }
}, [])

const loadContact = () => {
  socket.emit("load admin contact")
  socket.on("admin contact", (data) => {

      let dataContacts = {
          ...data,
          message: "Click here to start message"
      }
      setContacts([dataContacts])
  })
}

const onClickContact = (data) => {
  setContact(data)
}
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <ContactAdmin dataContact={contacts} clickContact={onClickContact} contact={contact} />
        {/* <div className="w-9/12 border-l-2 p-2">right</div> */}
        <Chat />
      </div>
    </>
  );
}

export default Complain