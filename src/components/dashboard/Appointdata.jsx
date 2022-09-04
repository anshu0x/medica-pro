import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import { useHistory } from "react-router-dom";

import "./dashboard.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);
  //const [disable, setDisable] = React.useState(false);
  var history = useHistory();
  const gotodetail = async (e) => {
    e.preventDefault();
    history.push("/doctor_details");
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={props.handleClickOpen}
        disabled={!props.hspname}
      >
        Go to details
      </Button>
      <BootstrapDialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={props.handleClose}
        >
          <b> Book an Appointment </b>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="modaldivder">
            <h4>
              {" "}
              Blood Availiability :
              {props.num == 500 ? (
                <CheckIcon
                  style={{
                    color: "green",
                    marginRight: "20px",
                    marginLeft: "20px",
                  }}
                />
              ) : (
                <CloseIcon style={{ color: "red", marginLeft: "20px" }} />
              )}
            </h4>

            <h4>
              {" "}
              Oxygen Availiability :
              {props.num1 == 510 ? (
                <CheckIcon
                  style={{
                    color: "green",
                    marginRight: "20px",
                    marginLeft: "20px",
                  }}
                />
              ) : (
                <CloseIcon style={{ color: "red", marginLeft: "20px" }} />
              )}
            </h4>

            <h4>
              {" "}
              Doctor Availiability :{" "}
              <Button variant="contained" size="small" onClick={gotodetail}>
                {" "}
                Go for booking!{" "}
              </Button>
            </h4>

            <h4>
              {" "}
              Bed Availiability :{" "}
              {props.num2 == 520 ? (
                <CheckIcon
                  style={{
                    color: "green",
                    marginRight: "20px",
                    marginLeft: "20px",
                  }}
                />
              ) : (
                <CloseIcon style={{ color: "red", marginLeft: "20px" }} />
              )}
            </h4>
            <h4>
              {" "}
              Other Services :{" "}
              <Button variant="contained" size="small">
                {" "}
                Check services !{" "}
              </Button>
            </h4>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.handleClose}>
            Submit
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
