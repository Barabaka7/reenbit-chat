import React, { useState, useEffect } from "react";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { AvatarBar } from "../../components/avatarBar/AvatarBar";
import { ChatsList } from "../../components/chatsList/ChatsList";
import { sortByDate } from "../../Utilities/utilities.js"
//import { USER } from "../../Utilities/data.js"

export const UserPane = ({ contacts, setCurrentChat, profile, logoutButton }) => {

  //console.log(contacts);

  const [ searchTerm, setSearchTerm ] = useState('');

  if (!contacts) return <div>Data is loading...</div>;
  
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

let avatarData = { avatar: profile.imageUrl,
                   isOnline: true,
                   contactName: profile.name};

if (searchTerm !== '')
{
   chatsToList = chatsToList.filter(contact => contact.contactName.toLowerCase().includes(searchTerm.toLowerCase()));

   //add here Serach in messages
}

  return (
    <div>
      <section className="user">
        <AvatarBar avatarData={avatarData}/>
      <div className="logoutButton"> {logoutButton}</div>
      </section>  

      <section className="searchBar">
        <SearchBar searchTerm={searchTerm}
                   handleChange={handleSearchChange}/>
      </section>  
      
      <section className="chats">
      <h2 className="makeMeLeftPadding">Chats</h2>  
        <ChatsList chatsToList={chatsToList} handleChatClick={handleChatClick}/>
      </section>  
    </div>
  );
};
