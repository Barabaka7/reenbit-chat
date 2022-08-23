import React from "react";

export const MessageInChat = ({avatar, from, message, timeStamp}) => {

    const date = new Date(timeStamp).toLocaleString('en-us');
    let messageToShow = undefined;
  
    if (from) {      
        messageToShow = (
            <div className="messageFrom" style={{justifyContent: 'start'}}>
                <img name='avatar' src={avatar} />
                <span>{message}</span>
                <p>{date}</p>
            </div>
          );    
    }
    else{
        messageToShow = (
            <div className="messageTo" style={{justifyContent: 'end'}}>
                <span>{message}</span>
                <p>{date}</p>
            </div>
          );    
    }

    return (
       <div>{messageToShow}</div>    
  );
    };

