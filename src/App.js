import Main from "Main.js";
import Header from "Header.js";
import "./styles.css";

export default function App() {
  return (
    <div className="outer">
      <div className="container">
        <Header />
        <Main />
      </div>
    </div>
  );
}
