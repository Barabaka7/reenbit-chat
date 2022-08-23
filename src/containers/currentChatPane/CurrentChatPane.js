import React, { useEffect, useState } from "react";
import { CurrentChat } from "../../components/currentChat/CurrentChat";
import { AvatarBar } from "../../components/avatarBar/AvatarBar";
import { MessageForm } from "../../components/messageForm/MessageForm";
import { sortByDate } from "../../Utilities/utilities.js"
import { fetchingRandomJoke } from "../../Utilities/fetching.js"

export const CurrentChatPane = ({ contacts, currentChat, addNewMessage }) => {

const [newMessage, setNewMessage] = useState('');

const generateResponseFromChak = async (chatId) => {
  let randomJoke = await fetchingRandomJoke();        
  addNewMessage(randomJoke, true, currentChat);
}

const chatToList = sortByDate(contacts.filter(id => id.contactId === currentChat))[0];

const avatarData = { avatar: chatToList.avatar,
                     isOnline: chatToList.isOnline,
                     contactName: chatToList.contactName};

 const handleSubmit = (e) => {

  const delayFrom10to15Sec = Math.random() * 5000 + 10000;

    e.preventDefault();
    addNewMessage(newMessage, false, currentChat);
    setTimeout(() => generateResponseFromChak(currentChat), delayFrom10to15Sec);
    setNewMessage('');

  }

  return (
    <div>
      <section className="avatar">
        <AvatarBar avatarData={avatarData}/>
      </section>  

      <section className="currentChat">
        <CurrentChat chatToList={chatToList}/>
      </section>  
      
      <section> 
        <MessageForm newMessage={newMessage} setNewMessage={setNewMessage} handleSubmit={handleSubmit}/>
      </section>  
    </div>
  );
};
