import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const VictoryDialog = ({ isOpen, onClose, onGameRestart }) => (
  <Dialog open={isOpen} onClose={onClose}>
    <DialogTitle>Parabéns!</DialogTitle>
    <DialogContent>
      <DialogContentText>Você venceu o jogo.</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button color="primary" onClick={onGameRestart}>
        Reiniciar
      </Button>
      <Button color="primary" onClick={onClose} autoFocus>
        Ok
      </Button>
    </DialogActions>
  </Dialog>
);

export default VictoryDialog;
