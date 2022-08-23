import React from "react";

export const MessageInChat = ({avatar, from, message, timeStamp}) => {

    const date = new Date(timeStamp).toLocaleString('en-us');
    let messageToShow = undefined;
  
    if (from) {      
        messageToShow = (
            <div className="messageFrom">
                <img name='avatar' src={avatar} />
                <text>{message}</text>
                <p>{date}</p>
            </div>
          );    
    }
    else{
        messageToShow = (
            <div className="messageTo">
                <text>{message}</text>
                <p>{date}</p>
            </div>
          );    
    }

    return (
       <div>{messageToShow}</div>    
  );
    };

