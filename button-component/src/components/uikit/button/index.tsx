import React from "react";
import { Button, ButtonProps } from "antd";

interface CustomButtonProps extends Omit<ButtonProps, "onClick"> {
  color?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  htmlType?: "button" | "submit" | "reset";
  ghost?: boolean;
  block?: boolean;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  color = "default",
  onClick,
  children,
  style,
  ...restProps
}) => {
  const buttonStyle = {
    backgroundColor: color,
    ...style,
  };

  return (
    <Button style={buttonStyle} {...restProps} onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomButton;
