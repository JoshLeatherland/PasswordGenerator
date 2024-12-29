import PropTypes from "prop-types";
import { Typography, LinearProgress, Box } from "@mui/material";

function PasswordStrengthIndicator({ strength }) {
  const strengthValue =
    strength === "Weak" ? 33 : strength === "Moderate" ? 66 : 100;
  const strengthColor =
    strength === "Weak"
      ? "error"
      : strength === "Moderate"
      ? "warning"
      : "success";

  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        Password Strength: {strength}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={strengthValue}
        color={strengthColor}
      />
    </Box>
  );
}

export default PasswordStrengthIndicator;

PasswordStrengthIndicator.propTypes = {
  strength: PropTypes.oneOf(["Weak", "Moderate", "Strong"]),
};
