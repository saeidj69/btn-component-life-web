import "./App.css";
import {  Flex } from "antd";
import { Button } from "./components/uikit";

function App() {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="app">
      <Flex gap="small" wrap="wrap">
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
        <Button style={{backgroundColor:"green" , color:"white"}}>Custom Button</Button>
      </Flex>      

    </div>
  );
}

export default App;
