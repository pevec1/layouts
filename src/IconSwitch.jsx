import React from "react";
import { v4 as uuidv4 } from "uuid";
import MaterialIcon, { colorPalette } from "material-icons-react";

function IconSwitch({ icon, onSwitch }) {
  console.log(icon);
  return <MaterialIcon icon={icon} size="large" onClick={() => onSwitch()} />;
}

export default IconSwitch;
