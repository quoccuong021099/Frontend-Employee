import { InputAdornment } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React from "react";

export default function InputCustom(props) {
  const { color, size, margin, fullWidth } = props;
  return (
    <TextField
      {...props}
      variant="outlined"
      size={size || "small"}
      color={color || "primary"}
      margin={margin || "dense"}
    />
  );
}
