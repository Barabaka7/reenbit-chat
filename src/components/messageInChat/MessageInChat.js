import React from "react";

export const MessageInChat = ({avatar, from, message, timeStamp}) => {

    const date = new Date(timeStamp).toLocaleString('en-us');
    let messageToShow = undefined;
  
    if (from) {      
        messageToShow = (
            <div className="messageFrom">
                <img name='avatar' src={avatar} />
                <span className="messageFromText">
                      {message}</span>
                <p>{date}</p>
            </div>
          );    
    }
    else{
        messageToShow = (
            <div className="messageTo">
                <div className="alignMeRight">
                    <span className="messageToText">{message}</span>
                <p>{date}</p>
                </div>
            </div>
          );    
    }

    return (
       <div>{messageToShow}</div>    
  );
    };

