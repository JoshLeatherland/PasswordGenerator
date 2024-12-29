import {
  Typography,
  FormControlLabel,
  Checkbox,
  Grid,
  Slider,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";

function CustomizePassword({
  length,
  setLength,
  hasUppercase,
  setHasUppercase,
  hasLowercase,
  setHasLowercase,
  hasNumbers,
  setHasNumbers,
  hasSymbols,
  setHasSymbols,
}) {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12}>
        <Typography gutterBottom>Password Length</Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <TextField
              type="number"
              value={length}
              onChange={(e) => setLength(Math.max(1, e.target.value))}
              inputProps={{ min: 1 }}
              style={{ width: "80px" }}
            />
          </Grid>
          <Grid item xs>
            <Slider
              value={length}
              onChange={(e, value) => setLength(value)}
              min={1}
              max={30}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={hasUppercase}
              onChange={() => setHasUppercase(!hasUppercase)}
            />
          }
          label="Uppercase"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={hasLowercase}
              onChange={() => setHasLowercase(!hasLowercase)}
            />
          }
          label="Lowercase"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={hasNumbers}
              onChange={() => setHasNumbers(!hasNumbers)}
            />
          }
          label="Numbers"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={hasSymbols}
              onChange={() => setHasSymbols(!hasSymbols)}
            />
          }
          label="Symbols"
        />
      </Grid>
    </Grid>
  );
}

export default CustomizePassword;

CustomizePassword.propTypes = {
  length: PropTypes.number,
  setLength: PropTypes.func,
  hasUppercase: PropTypes.bool,
  setHasUppercase: PropTypes.func,
  hasLowercase: PropTypes.bool,
  setHasLowercase: PropTypes.func,
  hasNumbers: PropTypes.bool,
  setHasNumbers: PropTypes.func,
  hasSymbols: PropTypes.bool,
  setHasSymbols: PropTypes.func,
};
