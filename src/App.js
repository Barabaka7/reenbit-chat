import './App.css';
import React, { useEffect, useState } from "react";
import { UserPane } from "./containers/userPane/UserPane.js"
import { CurrentChatPane } from "./containers/currentChatPane/CurrentChatPane.js"
import { CONTACTS } from "./Utilities/data.js"
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script'; 

function App() {

  const [currentChat, setCurrentChat] = useState(1);
  const [contacts, setContacts] = useState();
  const [profile, setProfile] = useState();

  const clientId = process.env.REACT_APP_CLIENT_ID;

  useEffect(() => {
    window.localStorage.getItem('contacts') ?
        setContacts(JSON.parse(window.localStorage.getItem('contacts'))) :
        setContacts(CONTACTS);
    setCurrentChat(parseInt(window.localStorage.getItem('currentChat')) || 1);

    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);

  }, [])

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

  useEffect(() => {
    window.localStorage.setItem('currentChat', currentChat.toString());
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
            return { ...contact, messages: [...contact.messages, addingMesssage] }
          }
          else { return contact }
        })
      return new_contacts;
    })
  }


  //********* Handling the Google Login *******************/
  const handleLogin = (googleData) => {
    setProfile(googleData.profileObj);
  }

  const handleFailure = (result) => {
    console.log('FAILURE', result)
  }

  const logOut = () => {
    setProfile(null);
  };

  //********* End of Handling the Google Login *******************/

  return (
    <div>
      {profile ? (
        <div className='App'>
          <div className="leftContainer">
            <UserPane contacts={contacts}
              setCurrentChat={setCurrentChat}
              profile={profile}
              logoutButton ={<GoogleLogout clientId={clientId}
              buttonText="Log out"
              onLogoutSuccess={logOut} />}/>
          </div>
          <div className="rightContainer">
            <CurrentChatPane
              contacts={contacts}
              currentChat={currentChat}
              addNewMessage={addNewMessage} />
          </div>
        </div>

      ) : (
        <header>
          <div className="loginPage">
          <h1>Google Login</h1>
          <br />
          <br />
          <div><GoogleLogin
            clientId={clientId}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
          </div>
          </div>
        </header>)}
    </div>
  );
}

export default App;