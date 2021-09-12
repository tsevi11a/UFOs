// import data from data.js file
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

// create function to build table
function buildTable(data) {
    // create a blank canvas -- tbody.html references the table, ("") is an empty string
    tbody.html(""); 
    
    // create for loop
    data.forEach((dataRow) => {
        // Append a row to the table body ("tr" = "table row") 
        let row = tbody.append("tr");
    
        // Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
          let cell = row.append("td"); // creates variable to append data to a table ("td" = "table data" tag)
          cell.text(val);
          }
        );
      });
    }
  
  // create function to filter data
  function handleClick() {
    // get datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the data using that date
    if (date) {
      // Apply `filter` to the table data to only keep the rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);