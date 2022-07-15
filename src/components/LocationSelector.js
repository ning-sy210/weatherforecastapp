import React from "react";

import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ACTIONS } from "../App";

const LocationSelector = ({ selectedLocation, locationList, dispatch }) => {
  const locationStr = JSON.stringify(selectedLocation);

  return (
    <div>
      <Box sx={{ maxWidth: 360 }}>
        <FormControl fullWidth>
          <InputLabel id="select-location-label">Location</InputLabel>
          <Select
            labelId="select-location-label"
            id="select-location"
            label="Location"
            value={locationStr === "{}" ? "" : locationStr}
            onChange={(e) =>
              dispatch({
                type: ACTIONS.SET_LOCATION,
                payload: { location: JSON.parse(e.target.value) },
              })
            }
          >
            {locationList.map((location) => (
              <MenuItem
                key={`location-menuitem-${location["area"]}`}
                value={JSON.stringify(location)}
              >
                {location["area"]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default LocationSelector;
