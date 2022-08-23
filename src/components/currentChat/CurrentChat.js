import React from "react";
import { MessageInChat } from "../messageInChat/MessageInChat"

export const CurrentChat = ( {chatToList} ) => {

    const chat = chatToList.messages.map( (message, i) => <MessageInChat
                key={i}
                avatar={chatToList.avatar}
                from={message.from}
                message={message.message}
                timeStamp={message.timeStamp}/>
                 )

    return (
       <div>{chat}</div>    
  );
    };
