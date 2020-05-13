import React from "react";
import clsx from "clsx";
import { useStyles } from "./style";
import { IconAction } from "../IconAction";

const IconRotateAction = ({ rotated, onRotate, ...rest }) => {
  const classes = useStyles();

  return (
    <IconAction
      className={clsx(classes.rotate, {
        [classes.rotateActive]: rotated,
      })}
      onClick={onRotate}
      iconStyle={classes.iconStyle}
      {...rest}
    />
  );
};

export { IconRotateAction };
