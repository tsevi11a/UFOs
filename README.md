# UFOs

## Overview of Project 
The purpose of this project is to create a webpage of UFO sightings where users can filter through a table of data using multiple search criteria.

## Results
The result is a dynamic table which allows the user to conduct searches using multiple criteria at the same time (i.e by date, city, state, country and/or shape). In order to filter the data, the user simply enters their search criteria and hits enter to see the results. 

##### *Example: Filter by Date (e.g. 1/1/2010)*

![single_filter](https://user-images.githubusercontent.com/86018601/133002707-5ffaae90-ff84-4bad-87cd-3df4eaaefeb7.png)
The results are all the sightings that occurred on 1/1/2010.

##### *Example: Filter by Date and City*

![multiple_filters](https://user-images.githubusercontent.com/86018601/133002716-81eb5350-0d82-4068-b372-3899af6cb476.png)
This further filters the results to show only sightings that occurred on 1/1/2010 in Benton.

Any number of filters can be used in any combination. 

## Summary
The above demonstrates using filters to comb through data stored in a JavaScript array. However, a key thing to note is that the criteria entered in the filters need to match the data.js file exactly in order to produce any results. For example, the user must use the appropriate abbreviations for the different states and use the appropriate format when entering a date. Without an awareness of this limitation, users may find themselves getting no results.  

Further development:

   1. Links to more info (e.g. map )
   2. Improving the search by (e.g. adding buttons and drop down menus)
