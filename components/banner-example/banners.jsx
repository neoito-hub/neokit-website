import React, { useState ,useEffect} from 'react'

function Banners({children ,color, appearance , icon}) {

    const [bannerColor, setBannerColor] = useState('');
    const [bannerBGColor, setBannerBGColor] = useState('');
const [bannerIcon, setBannerIcon] = useState('');
useEffect(() => {
    getProps();
  }, []);
  const getProps = () => {

    if(appearance === 'warning' || !appearance){
     color ? setBannerColor(color): setBannerColor('#253858');
     icon ? setBannerIcon(icon): setBannerIcon('assets/warning.svg');
     setBannerBGColor(' bg-yellow-400 ');
    }
    
    else if(appearance === 'error'){
      color ? setBannerColor(color): setBannerColor('#FFF');
      icon ? setBannerIcon(icon): setBannerIcon('assets/error.svg');
      setBannerBGColor(' bg-red-500 ');
     }
     else if(appearance === 'announcement'){
      color ? setBannerColor(color): setBannerColor('#FFF');
      setBannerBGColor(' bg-gray-500 ');
     }
  };
    return (
        <div className="banner-wrapper">
           <div className={"flex items-center justify-center  hover:overflow-auto h-12 px-10 rounded banner-body " + bannerBGColor }>
              { appearance != 'announcement' && ( <span className="text-base banner-icon">
                    <img src={bannerIcon} alt={appearance} className=' max-w-max'></img>
                </span>
                )} 
                <div className={`p-1 truncate  flex-initial text-sm font-medium tracking-wide banner-title  ${appearance === 'announcement' ? 'hover:whitespace-normal hover:mt-10':''}`} style={{ color: bannerColor }}>
               {children}
                </div>
             </div>

{/* {(() => {
        switch (appearance) {
          case "warning":   
            return (
                <div className="flex items-center justify-center bg-yellow-400 h-12 px-10">
                <span className="text-base">
                    <img src={bannerIcon} alt={appearance} className=' max-w-max'></img>
                </span>
                <div className="p-1 truncate flex-initial text-sm font-medium tracking-wide "  style={{ color: bannerColor }}>
               {children}
                </div>
             </div>
            )
        }
      })()} */}
     </div>
    )
}

export default Banners;



