import React from "react";

export const MessageForm = ({newMessage, setNewMessage, handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
        <input type="textarea"
               name="newMessage"
               id="newMessage"
               value={newMessage}
               placeholder="Type your message"
               onChange={e=>setNewMessage(e.target.value)}/>
        <input type="submit" value="Submit" />
        </form> 
    
  )
  };
