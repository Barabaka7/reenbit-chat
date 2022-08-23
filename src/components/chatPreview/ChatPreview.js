import React from "react";

export const ChatPreview = (props) => {

    const date = new Date(props.timeStamp).toLocaleString('en-us', {month: 'short', day: 'numeric', year: 'numeric'});
  
    const handleClick = (e) => {
        props.handleChatClick(props.chatId);
    }

    return (
     <tr onClick={handleClick}>
        <td>
            <img name='avatar' src={props.avatar} />
            {props.isOnline ? <input type="checkbox" disabled="disabled" id="isOnline" name="isOnline" value="isOnline" checked/> : <input type="checkbox" id="isOnline" name="isOnline" value="isOnline" disabled="disabled"/>}
        </td>
        <td>
            <h3>{props.contactName}</h3>
            <p>{props.lastMessage}</p>
        </td>
        <td>
            {date}
        </td>
    </tr>
  );
};
