import React, { useEffect, useState } from "react";

const AvatarGroupItem = ({
  src,
  text,
  index,
  avatarItemCount,
  viewAvatar, setViewAvatar
}) => {
  //   const charData = text?.trim();
  //     const wordCount =  charData?.split(' ').length;
  const [avatarText, setAvatarText] = useState(0);
 
  useEffect(() => {
    const avatarGroupText = text?.trim().split(/\s+/);
    if (avatarGroupText?.length === 1) {
      setAvatarText(text.charAt(0) + text.charAt(1));
    } else if (avatarGroupText?.length > 1) {
      setAvatarText(
        avatarGroupText[0].charAt(0) + avatarGroupText[1].charAt(0)
      );
    }
    
  }, [text]);


  const showMore =()=>{

  }

  return (
    <>
      {index < viewAvatar ? (
        <>
          {src && (
            <img
              className="relative z-30 inline object-cover w-12 h-12 border-2 border-white rounded-full cursor-pointer group-item "
              src={src}
              alt={text}
            />
          )}
          {!src && text && (
            <span className="relative z-30   w-12 h-12 border-2 border-white rounded-full cursor-pointer  inline-flex items-center justify-center font-bold text-sm uppercase bg-gray-100  group-item ">
              {avatarText}
            </span>
          )}
        </>
      ) : (
        viewAvatar === index && (
          <span className="relative z-30   w-12 h-12 border-2 border-white rounded-full cursor-pointer  inline-flex items-center justify-center font-bold text-sm uppercase bg-gray-100 group-item " onClick={()=>setViewAvatar(avatarItemCount)}>
            +{avatarItemCount - viewAvatar}
          </span>
        )
      )}
    </>
  );
};

export default AvatarGroupItem;
