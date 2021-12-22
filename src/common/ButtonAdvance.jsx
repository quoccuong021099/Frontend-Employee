import { Button, CircularProgress } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";
import React from "react";
const useStyles = makeStyles((theme) => ({
  loading: {
    color: "#887e7e",
    marginRight: theme.spacing(1),
  },
  button: {
    textTransform: "capitalize",
  },
  buttonUpper: {
    textTransform: "uppercase",
  },
}));
const ButtonAdvanced = (props) => {
  const classes = useStyles();

  const {
    variant,
    size,
    sizeLoading,
    color,
    loading,
    children,
    uppercase,
    fullWidth,
    ...restProps
  } = props;

  return (
    <Button
      variant={variant || "contained"}
      size={size || "medium"}
      disabled={loading}
      fullWidth={fullWidth}
      color={color || "primary"}
      className={clsx(classes.button, uppercase && classes.buttonUpper)}
      {...restProps}
    >
      {loading && (
        <CircularProgress
          size={sizeLoading || 16}
          className={classes.loading}
        />
      )}
      {children}
    </Button>
  );
};
export default ButtonAdvanced;
