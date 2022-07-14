import React, { useState } from "react";

import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const LocationList = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const locations = ["Location 1", "Location 2", "Location 3"];

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
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            {locations.map((location) => (
              <MenuItem key={`location-menuitem-${location}`} value={location}>
                {location}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default LocationList;
