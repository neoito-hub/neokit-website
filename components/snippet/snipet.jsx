import React, { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
function Snipet(props) {
    const [language, changeLanguage] = useState("jsx");
    // const [languageDemo, changeDemo] = useState(props.code["jsx"]);
    return (
        <div className="py-3">
           <CopyBlock
          language={language}
          text={props.code}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        /> 
        </div>
    )
}

export default Snipet
