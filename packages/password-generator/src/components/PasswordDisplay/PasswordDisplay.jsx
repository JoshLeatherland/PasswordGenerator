import { Typography, IconButton, Box, Tooltip } from "@mui/material";
import {
  ContentCopy as CopyIcon,
  Refresh as RefreshIcon,
} from "@mui/icons-material";
import PropTypes from "prop-types";

function PasswordDisplay({ password, onCopy, onGenerate }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      gap="10px"
    >
      <Typography
        variant="h6"
        style={{
          fontFamily: "Poppins, sans-serif",
          wordBreak: "break-word",
          flex: "1",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
        title={password}
      >
        {password || "Generate a Password"}
      </Typography>

      <Box display="flex" gap="10px">
        <Tooltip title="Copy to Clipboard">
          <IconButton color="primary" onClick={onCopy} disabled={!password}>
            <CopyIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Generate New Password">
          <IconButton color="primary" onClick={onGenerate}>
            <RefreshIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default PasswordDisplay;

PasswordDisplay.propTypes = {
  password: PropTypes.string,
  onCopy: PropTypes.func,
  onGenerate: PropTypes.func,
};
