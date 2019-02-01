// from data.js
let tableData = data;

// YOUR CODE HERE!
let table = d3.select('#ufo-table');
let tbody = table.select('tbody');

// Console.log the data from data.js
console.log(tableData);

// Loop through 'tableData' and console.log each ufo sighting object
// Append one table row for each ufo sighting using d3
// Use Object.entries to console.log each weather report value
// Append one 1 cell per ufo sighting value
// Update each cells value with ufo sighting values
// tableData.forEach(function (ufoSighting) {
//     console.log(ufoSighting);
//     let newRow = tbody.append('tr');
//
//     Object.entries(ufoSighting).forEach(function ([key, value]) {
//         console.log(key, value);
//     let newCell = newRow.append('td');
//     newCell.text(value)
//     });
// });

// Refactor above code to use arrow functions
tableData.forEach((ufoSighting) => {
    let newRow = tbody.append('tr');
    Object.entries(ufoSighting).forEach(([key, value]) => {
       let newCell = newRow.append('td');
       newCell.text(value);
    });
});
