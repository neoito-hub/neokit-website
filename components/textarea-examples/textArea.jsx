import React, { useState, useEffect } from "react";

function TextArea({
  value,
  rows,
  cols,
  resize,
  maxHeight,
  ...props
}) {
  const [textareaSize, setTextareaSize] = useState({
    row: "2",
    col: "50"
  });
  const [textareaStyle, setTextareaStyle] = useState(false);
  const [textareaDefault, setTextareaDefault] = useState("");

  useEffect(() => {
    setTextareaStyle(resize?.trim());
    if (!resize ||  resize.trim() === "smart" || resize.trim() === "default") {
      setTextareaDefault("max-content");
      setTextareaStyle(true);
    } else {
      setTextareaDefault(maxHeight);
      setTextareaStyle(false);
    }
    getProps();
  }, []);

  const getProps = () => {
    if (rows) {
      setTextareaSize({
        ...textareaSize,
        row: rows,
        col: cols
      });
    }
  };
  const handleChange = (event) => {
    if (!resize || resize.trim() === "smart" || resize.trim() === "default") {
      event.target.style.height = "inherit";
      event.target.style.height = `${event.target.scrollHeight}px`;
    }
  };

  return (
    <div className='flex w-full flex-col'>
      <textarea
        className={`focus:outline-none p-3 hover:bg-gray-100 focus:bg-transparent ${
          textareaStyle
            ? " overflow-hidden resize-none "
            : resize === "vertical"
            ? "resize-y"
            : resize === "horizontal"
            ? "resize-x"
            : resize === "auto"
            ? "resize"
            : resize === "none"
            ? "resize-none"
            : "resize-none"
        }`}
        style={{ maxHeight: textareaDefault, height: "auto" }}
        value={value}
        rows={textareaSize.row}
        cols={textareaSize.col}
        {...props}
        onKeyDown={(event) => handleChange(event)}
      />
    </div>
  );
}

export default TextArea;
