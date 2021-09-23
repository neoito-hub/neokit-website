import React, { useState, useEffect } from "react";

function Tags({ children, href, removable , position ,rounded ,color}) {
  const [tagsState, setTagsState] = useState("");
  const [tagsRemove, setTagRemove] = useState(true);
  const [tagsColors, setTagColor] = useState('');
  useEffect(() => {
    getProps();
    getTagsColor();
  }, []);
  const getProps = () => {
    if (href) setTagsState("cursor-pointer hover:bg-gray-200");
    else setTagsState("cursor-default");
  };

 const getTagsColor=()=>{
     console.log('enyer');
      if((!color || color) ==="standard" ){
        setTagColor('')
      }
      else if (color ==="black" ){
        setTagColor('white');
      }
      else{
        setTagColor('black'); 
      }
      console.log(tagsColors);
  }
 

  return (
    <div>
      {tagsRemove && (
        <button
          class={
            `text-sm font-medium inline-flex items-center justify-center py-1 px-2  rounded  text-gray-600 bg-gray-100  focus:outline-none  ${ removable ? 'hover:text-red-400 pointer-events-none hover:bg-red-100 '  : '' } , ${ removable && href ? 'hover:text-gray-500 pointer-events-auto'  : '' } ${rounded ? ' rounded-3xl': 'rounded-sm'} ` +
            tagsState
          }
          style={{backgroundColor: color? color: '', color: tagsColors ? tagsColors : ''}}
        >
          <a
            href={href}
            className={` flex items-center justify-center gap-1 ${
              href ? "hover:underline text-blue-500 " : "no-underline"
            } ${!position || position === 'before' ? 'flex-row' : 'flex-row-reverse' }`}
            style={{color: tagsColors ? tagsColors : ''}}
          >
            {children}
          </a>
          {removable && (
           <button className='text-sm leading-none px-1 focus:outline-none pointer-events-auto hover:text-gray-500' onClick={()=>setTagRemove(false)} >
           &times;
         </button>
          )}
        </button>
      )}
    </div>
  );
}

export default Tags;
