import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { ButtonPurchase } from "../Button/button_purchase";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "red",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function ModalDisplay() {
  const [open, setOpen] = useState(false);
  const [banking, setBanking] = useState("");
  const [alert, setAlert] = useState(null);
  const handleChangeBanking = (event) => {
    setBanking(event.target.value);
  };
  console.log(banking);

  function HandleSubmit() {
    if (banking === "") {
      setAlert(true);
    } else {
      localStorage.clear();
      window.location.href = "/";
    }
  }
  console.log(alert);
  return (
    <div>
      <ButtonPurchase
        color={"white"}
        bgcolor={"red"}
        onClick={() => setOpen(true)}
      >
        Purchase
      </ButtonPurchase>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ยืนยันการชำระเงิน?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            กรุณาเลือกธนาคาร
          </Typography>
          <Select
            sx={{ mt: 2, width: 250 }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={banking}
            onChange={handleChangeBanking}
          >
            <MenuItem value={""}>กรุณาเลือกธนาคาร</MenuItem>
            <MenuItem value={"ธนาคารกรุงเทพ"}>ธนาคารกรุงเทพ</MenuItem>
            <MenuItem value={"ธนาคารกสิกรไทย"}>ธนาคารกสิกรไทย</MenuItem>
            <MenuItem value={"ธนาคารกรุงไทย"}> ธนาคารกรุงไทย</MenuItem>
            <MenuItem value={"ธนาคารไทยพาณิชย์"}> ธนาคารไทยพาณิชย์</MenuItem>
          </Select>
          <div>
            <ButtonPurchase
              color={"white"}
              bgcolor={"black"}
              onClick={() => HandleSubmit()}
            >
              ตกลง
            </ButtonPurchase>
            <ButtonPurchase
              color={"white"}
              bgcolor={"black"}
              onClick={() => setOpen(false)}
            >
              ยกเลิก
            </ButtonPurchase>
          </div>
          {alert === true && (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              กรุณาเลือกธนาคาร
            </Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default ModalDisplay;
/*
    if (banking === "") {
      return (
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          กรุณาเลือกธนาคาร
        </Typography>
      );
    }
    alert("Success");
    window.location.href = "/"

*/
