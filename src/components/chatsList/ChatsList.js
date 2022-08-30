import React from "react";
import { ChatPreview } from "../chatPreview/ChatPreview"

export const ChatsList = ({chatsToList, handleChatClick}) => {

    const chats = chatsToList.map( (chat,i) => <ChatPreview
                key = {i}
                chatId={chat.contactId}
                contactName={chat.contactName}
                isOnline={chat.isOnline}
                avatar={chat.avatar}
                lastMessage={chat.messages.message}
                timeStamp={chat.messages.timeStamp}
                handleChatClick={handleChatClick}/> );

    return (
        <table className="makeMeLeftPadding">
        <tbody>{chats}</tbody>
         </table>
      
  );
    };
