import React, { useEffect, useState, useRef } from "react";
import { CurrentChat } from "../../components/currentChat/CurrentChat";
import { AvatarBar } from "../../components/avatarBar/AvatarBar";
import { MessageForm } from "../../components/messageForm/MessageForm";
import { fetchingRandomJoke } from "../../Utilities/fetching.js"

export const CurrentChatPane = ({ contacts, currentChat, addNewMessage }) => {

const [newMessage, setNewMessage] = useState('');

const messagesEndRef = useRef(null);

useEffect(()=>{
  if (!messagesEndRef.current) return;
  messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
},[contacts])

const generateResponseFromChuck = async (chatId) => {
  let randomJoke = await fetchingRandomJoke();        
  addNewMessage(randomJoke, true, currentChat);
}

if (!contacts) return <div>Data is loading...</div>;

const chatToList = contacts.filter(id => id.contactId === currentChat)[0];

chatToList.messages.sort((a,b) => {     
  return new Date(a.timeStamp) > new Date(b.timeStamp) ? 1 : -1});


const avatarData = { avatar: chatToList.avatar,
                     isOnline: chatToList.isOnline,
                     contactName: chatToList.contactName};

 const handleSubmit = (e) => {

  const delayFrom10to15Sec = Math.random() * 5000 + 10000;

    e.preventDefault();
    addNewMessage(newMessage, false, currentChat);
    setTimeout(() => generateResponseFromChuck(currentChat), delayFrom10to15Sec);
    setNewMessage('');

  }

  return (
    <div>
      <section className="avatar">
        <AvatarBar avatarData={avatarData}/>
      </section>  

      <section className="currentChat" >
        <CurrentChat chatToList={chatToList}/>
        <div ref={messagesEndRef}/>
      </section>  
      
      <section className="messageForm"> 
        <MessageForm newMessage={newMessage}
                     setNewMessage={setNewMessage}
                     handleSubmit={handleSubmit}/>
      </section>  
    </div>
  );
};
