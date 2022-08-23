import React, { useState, useEffect } from "react";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { AvatarBar } from "../../components/avatarBar/AvatarBar";
import { ChatsList } from "../../components/chatsList/ChatsList";
import { sortByDate } from "../../Utilities/utilities.js"
import { USER } from "../../Utilities/data.js"

export const UserPane = ({ contacts, setCurrentChat }) => {

  //console.log(contacts);

  const [ searchTerm, setSearchTerm ] = useState('');
  
  let chatsToList = contacts.map( contact => {
    return {
        ...contact,
        messages: sortByDate(contact.messages)[0]
            }}
        ).sort((a,b) => {     
          return new Date(b.messages.timeStamp) > new Date(a.messages.timeStamp) ? 1 : -1});    

  const handleSearchChange = (newSearch) => {
    setSearchTerm(newSearch);
  }

  const handleChatClick = (newCurrentChat) => {setCurrentChat(newCurrentChat)}

let avatarData = { avatar: USER.avatar,
                   isOnline: USER.isOnline,
                   contactName: USER.contactName};

if (searchTerm !== '')
{
   chatsToList = chatsToList.filter(contact => contact.contactName.toLowerCase().includes(searchTerm.toLowerCase()));

   //add here Serach in messages
}

  return (
    <div>
      <section>
        <AvatarBar avatarData={avatarData}/>
      </section>  

      <section className="searchBar">
        <SearchBar searchTerm={searchTerm}
                   handleChange={handleSearchChange}/>
      </section>  
      
      <section className="chats">
      <h2 style={{ "paddingLeft": "10px", "paddingTop": "10px" }}>Chats</h2>  
        <ChatsList chatsToList={chatsToList} handleChatClick={handleChatClick}/>
      </section>  
    </div>
  );
};
