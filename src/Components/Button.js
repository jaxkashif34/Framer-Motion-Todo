import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[600]),
  backgroundColor: grey[600],
  "&:hover": {
    backgroundColor: grey[600],
  },
}));

export const CustomizedButtons = ({ text }) => {
  return <ColorButton variant="contained">{text}</ColorButton>;
};
