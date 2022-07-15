import React, { useEffect, useState } from "react";

import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ACTIONS } from "../App";

const LocationSelector = ({ selectedLocation, locationList, dispatch }) => {
  return (
    <div>
      <Box sx={{ maxWidth: 360 }}>
        <FormControl fullWidth>
          <InputLabel id="select-location-label">Location</InputLabel>
          <Select
            labelId="select-location-label"
            id="select-location"
            value={selectedLocation}
            label="Location"
            onChange={(e) =>
              dispatch({
                type: ACTIONS.SET_LOCATION,
                payload: { location: e.target.value },
              })
            }
          >
            {locationList.map((location) => (
              <MenuItem
                key={`location-menuitem-${location["name"]}`}
                value={location["name"]}
              >
                {location["name"]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default LocationSelector;
