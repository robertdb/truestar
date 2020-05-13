import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { IconButton as IconActionMUI } from "@material-ui/core";

const IconAction = ({ color, iconName, onClick, iconStyle, ...rest }) => {
  const icons = {
    favorite: FavoriteIcon,
    selected: CheckCircleIcon,
    expand: ExpandMoreIcon,
  };
  const Icon = icons[iconName];
  const withColor = color ? { color } : {};

  return (
    <IconActionMUI onClick={onClick} {...rest}>
      <Icon style={withColor} className={iconStyle} />
    </IconActionMUI>
  );
};

IconAction.defaultProps = {
  color: "",
  size: "small",
  onClick: () => {},
  iconStyle: "",
};

export { IconAction };
