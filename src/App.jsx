import {createRoot} from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Vincent" animal="Cat" breed="Scottish Fold" />
  </div>
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
