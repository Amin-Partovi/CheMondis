import React, { PropsWithChildren } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import Title from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import Close from "../../assets/images/close.svg";

import styles from "./modal.module.scss";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& 	.MuiDialog-paper": {
    backgroundColor: "#494653",
    color: "#ffffff",
  },
  "& .MuiDialogTitle-root": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

interface Props extends PropsWithChildren<any> {
  open: boolean;
  onClose: () => void;
  title?: string;
}

function DialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <Title sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <img
          src={Close}
          alt="close modal"
          className={styles["close-icon"]}
          onClick={onClose}
        />
      ) : null}
    </Title>
  );
}

const Modal: React.FC<Props> = ({ open, onClose, children, title = " " }) => {
  return (
    <div>
      <StyledDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={"lg"}
      >
        <DialogTitle id="customized-dialog-title" onClose={onClose}>
          <span className={styles.title}>{title}</span>
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
      </StyledDialog>
    </div>
  );
};

export default Modal;
