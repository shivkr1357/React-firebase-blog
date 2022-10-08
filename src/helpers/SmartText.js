import { useState } from "react";

const SmartText = ({ text, length = 150 }) => {
  const [showLess, setShowLess] = useState(true);

  if (text.length < length) {
    return <>{text}</>;
  }

  return (
    <div>
      <p
        dangerouslySetInnerHTML={{
          __html: showLess ? `${text.slice(0, length)}...` : text,
        }}></p>
      <p
        style={{ color: "blue", cursor: "pointer" }}
        onClick={() => setShowLess(!showLess)}>
        &nbsp;View {showLess ? "More" : "Less"}
      </p>
    </div>
  );
};

export default SmartText;
