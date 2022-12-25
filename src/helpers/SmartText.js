import { useState } from "react";

const SmartText = ({ text, length = 150 }) => {
  const [showLess, setShowLess] = useState(true);

  if (text.length < length) {
    return <>{text}</>;
  }

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: showLess ? `${text.slice(0, length)}...` : text,
        }}></div>
      <div
        style={{ color: "blue", cursor: "pointer" }}
        onClick={() => setShowLess(!showLess)}>
        &nbsp;View {showLess ? "More" : "Less"}
      </div>
    </div>
  );
};

export default SmartText;
