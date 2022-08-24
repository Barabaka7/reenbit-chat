import './App.css';
import React, {useEffect, useState} from "react";
import {UserPane} from "./containers/userPane/UserPane.js"
import {CurrentChatPane} from "./containers/currentChatPane/CurrentChatPane.js"
import {CONTACTS} from "./Utilities/data.js"
import GoogleLogin from 'react-google-login';

function App({test}) {

  const [currentChat, setCurrentChat] = useState(1);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(JSON.parse(window.localStorage.getItem('contacts')) || CONTACTS);
    setCurrentChat(parseInt(window.localStorage.getItem('currentChat')) || 1);
    // alert(`alert from mounting ${JSON.parse(window.localStorage.getItem('contacts'))}`);
  }, [])

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
    // console.log(`alert from current chat ${window.localStorage.getItem('contacts')}`)
  }, [contacts])

  useEffect(() => {
    window.localStorage.setItem('currentChat', currentChat.toString());
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
          } else {
            return contact
          }
        })
      return new_contacts;
    })
  }

  return (
    <div className="App">
      <header>
        <h1>Google Login</h1>
        <div><GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Log in with Google" />
        </div>
      </header>

      <div className="leftContainer">
        <UserPane contacts={contacts}
                  setCurrentChat={setCurrentChat} />
      </div>
      <div className="rightContainer">
        <CurrentChatPane
          contacts={contacts}
          currentChat={currentChat}
          addNewMessage={addNewMessage} />
      </div>
    </div>
  );
}

export default App;