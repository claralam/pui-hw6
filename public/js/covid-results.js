// Class for a covid-result
function Result(dow, month, date, year, time, location, result) {
    this.dow = dow
    this.month = month
    this.date = date
    this.year = year
    this.time = time
    this.location = location
    this.result = result
}

// Creating past results
var may12_21 = new Result("Wednesday", "May", 12, 2021, "12:05 PM", "East Campus Garage", "Negative/Not Detected")
var aug26_21 = new Result("Thursday", "August", 26, 2021, "3:20 PM", "East Campus Garage", "Negative/Not Detected")
var sep16_21 = new Result("Thursday", "September", 16, 2021, "2:45 PM", "East Campus Garage", "Negative/Not Detected")
var oct14_21 = new Result("Thursday", "October", 14, 2021, "11:30 AM", "East Campus Garage", "Negative/Not Detected")
var nov17_21 = new Result("Wednesday", "November", 17, 2021, "2:30 PM", "East Campus Garage", "Negative/Not Detected")


const past_results = [may12_21, aug26_21, sep16_21, oct14_21, nov17_21]


function onLoad() {
    past_results.forEach(item => {
        // Get table by ID
        var resultsTable = document.getElementById("covid-results");

        // Add new row at the top of the table, under the headings
        var row =  resultsTable.insertRow(1);

        // Add new cols for the row
        var col1 = row.insertCell(0);
        var col2 = row.insertCell(1);
        var col3 = row.insertCell(2);

        // Add into the cols of the rows
        col1.innerHTML = '<img class="checkmark" src="images/check.png" alt="checkmark">' //checkmark
        col2.className = "date-info"
        col2.innerHTML = `${item.dow}, ${item.month} ${item.date}, ${item.year}`
        col3.className = "button-col"
        col3.innerHTML = '<button data-modal-target="#modal" class="button popup-button" onclick="openModal(modal, this)">View</button>'
    })
  }