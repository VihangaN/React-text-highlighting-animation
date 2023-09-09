import { useState, useEffect } from "react";
import "./styles.scss";

const TextAnim = ({ text, scroll }) => {
  const charArr = [...text];
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const percentage = (scroll / scrollableHeight) * 100;
  const charLength = charArr.length;

  return charArr?.map((char, i) => {
    const charPercentage = i * (100 / charLength);
    const charOpacity = percentage > charPercentage ? 0.8 : 0.2;
    const charColor = `rgba(0, 0, 0, ${charOpacity})`;
    return (
      <div
        key={i}
        className={`text text-${i}`}
        style={{
          color: charColor,
          transition: "color 0.4s"
        }}
      >
        {char}
      </div>
    );
  });
};

export default function App() {
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="text-wrapper">
          <TextAnim
            scroll={scrollPos}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          />
        </div>
      </div>
    </div>
  );
}
