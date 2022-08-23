import './App.css';
import React, { useEffect, useState } from "react";
import { SplitPane } from "./components/splitPane/SplitPane.js"
import { UserPane } from "./containers/userPane/UserPane.js"
import { CurrentChatPane } from "./containers/currentChatPane/CurrentChatPane.js"
import { CONTACTS } from "./Utilities/data.js"

function App() {

  const [currentChat, setCurrentChat] = useState(1);
  const [contacts, setContacts] = useState([]);

  useEffect(()=>{
    setContacts(CONTACTS);
  }, [])

  const addNewMessage = (newMessage, from, contactId) => {

    const addingMesssage = {
      message: newMessage,
      timeStamp: (new Date()).toISOString(),
      from: from,
      unread: false
    };
   
    setContacts(prev => {
          const new_contacts = prev.map( 
              contact => {
                   if (contact.contactId === contactId) {             
             return {...contact, messages: [...contact.messages, addingMesssage]}
            }
                   else {return contact}})
            return new_contacts;
    })
    }



  return (
    <div className="App">
      {/* <SplitPane
        left={
          */}
          <UserPane contacts={ contacts }
                    setCurrentChat={setCurrentChat}/>
      
          <CurrentChatPane contacts={contacts}
                           currentChat={currentChat}
                           addNewMessage={addNewMessage} />
    </div>
  );
}

export default App;
