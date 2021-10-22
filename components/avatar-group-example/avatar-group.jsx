import React, { useEffect, useState } from "react";

const AvatarGroup = ({ children, maxCount }) => {
  const [avatarItemCount, setAvatarItemCount] = useState(0);
  const [viewAvatar, setViewAvatar] = useState(0);
  useEffect(() => {
    setAvatarItemCount(children.length);
    if (maxCount) {
      setViewAvatar(maxCount);
    }
    else setViewAvatar(children.length);
  }, [children]);

  return (
    <div className="avatar-group-wraper">
      <div class="-space-x-4 avatar-group-item ">
        {children.map((child, index) =>
          React.cloneElement(child, {
            index,
            avatarItemCount,
            viewAvatar,
            setViewAvatar,
          })
        )}
      </div>
    </div>
  );
};

export default AvatarGroup;
