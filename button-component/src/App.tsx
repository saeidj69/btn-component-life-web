import "./App.css";
import { Flex } from "antd";
import { Button } from "./components/uikit";

function App() {
  const handleClick = () => {
    alert("clicked");
  };
  return (
    <div className="app">
      <Flex gap="small" wrap="wrap">
        <Button onClick={handleClick} type="primary" size="large">
          Primary Button
        </Button>
        <Button onClick={handleClick}>Default Button</Button>
        <Button type="dashed" size="small">
          Dashed Button
        </Button>
        <Button onClick={handleClick} type="text">
          Text Button
        </Button>
        <Button onClick={handleClick} type="link">
          Link Button
        </Button>

        <Button
          onClick={handleClick}
          style={{ backgroundColor: "green", color: "white" }}
        >
          Custom Button
        </Button>
        <Button
          onClick={handleClick}
          style={{
            backgroundColor: "red",
            color: "white",
            width: "150px",
            height: "80px",
          }}
        >
          Custom Button
        </Button>
      </Flex>
    </div>
  );
}

export default App;
