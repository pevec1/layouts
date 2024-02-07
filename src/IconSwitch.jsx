import React from "react";
import { v4 as uuidv4 } from "uuid";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";

function IconSwitch({ icon, onSwitch }) {
  console.log(icon);
  if (icon === "view_list") {
    return (
      <ViewListIcon
        key={uuidv4()}
        icon={icon}
        sx={{ fontSize: 80 }}
        onClick={(icon) => onSwitch(icon)}
      />
    );
  } else if (icon === "view_module") {
    return (
      <ViewModuleIcon
        key={uuidv4()}
        icon={icon}
        sx={{ fontSize: 80 }}
        onClick={(icon) => onSwitch(icon)}
      />
    );
  }
}

export default IconSwitch;
