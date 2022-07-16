# Project Description

This project was created with the React JS framework.  
To run the project, simply follow the steps below:  

1. Ensure that you have the latest version of Node.js installed
2. Clone this project
3. cd into the project directory and run the following commands:

## `npm install`

The above command will install the necessary dependencies used in the project. After the command is executed, a "node_modules" directory will be generated in the project root directory. Ensure that this "node_modules" folder is in the same level as the "public" and "src" directories.

## `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Assumptions

- The coordinates (i.e. latitude and longitude) of an area (e.g. Ang Mo Kio) provided by the weather forecast API has 6 decimal places, while the coordinates of the traffic cameras provided by the traffic camera API has 3 decimal places. Since it is highly probable that the two sets of coordinates do not match, a traffic camera is deemed to be in an area as long as the difference between the latitudes and longitudes are each within 0.05 (default value).
- Because of the above definition, there could be multiple or no traffic cameras that are in a given area. However, since there is no specification in the assessment details, in the event where a traffic camera(s) is in the area, image from only the first camera that is found to be in the area is displayed. 
