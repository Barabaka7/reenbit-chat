import './App.css';
import React, { useEffect, useState } from "react";
//import { SplitPane } from "./components/splitPane/SplitPane.js"
import { UserPane } from "./containers/userPane/UserPane.js"
import { CurrentChatPane } from "./containers/currentChatPane/CurrentChatPane.js"
import { CONTACTS } from "./Utilities/data.js"

function App() {

  const [currentChat, setCurrentChat] = useState(1);
  const [contacts, setContacts] = useState(CONTACTS);

  useEffect(()=>{
   // setContacts(JSON.parse(window.localStorage.getItem('contacts')));
    setCurrentChat(JSON.parse(window.localStorage.getItem('currentChat')));
  //  alert(`alert from mounting ${JSON.parse(window.localStorage.getItem('currentChat'))}`);
  }, [])

  useEffect(()=>{
    window.localStorage.setItem('contacts', contacts);
  
  }, [contacts])

  useEffect(()=>{
    window.localStorage.setItem('currentChat', currentChat);
  //  alert(`alert from current chat ${window.localStorage.getItem('currentChat')}`)
  }, [currentChat])

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
      <div className="leftContainer">
          <UserPane className="UserPane"
                    contacts={ contacts }
                    setCurrentChat={setCurrentChat}/>
      </div>
      <div className="rightContainer">
          <CurrentChatPane
                           className="CurrentChatPane" 
                           contacts={contacts}
                           currentChat={currentChat}
                           addNewMessage={addNewMessage} />
        </div>
    </div>
  );
}

export default App;