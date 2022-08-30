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
            <input type="checkbox" disabled checked={props.isOnline} />
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
