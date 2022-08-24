import React from "react";

export const AvatarBar = ({avatarData}) => {
  return (
    <div className="avatar">
      <img src={avatarData.avatar} className="avatar" />
      <input type="checkbox" disabled checked={avatarData.isOnline} />
      <span className="contactName">{avatarData.contactName}</span>
    </div>
  );
};
