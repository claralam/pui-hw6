// Loading previously pressed data into confirmation page
function onLoadConfirm() {
    var apptType = JSON.parse(localStorage.getItem("apptType"));
    var apptDate = JSON.parse(localStorage.getItem("apptDate"));
    var apptTime = JSON.parse(localStorage.getItem("apptTime"));

    var apptTypeTag = document.getElementById("appt-type");
    var apptDateTag = document.getElementById("appt-date");
    var apptTimeTag = document.getElementById("appt-time");

    apptTypeTag.innerHTML = apptType;
    apptDateTag.innerHTML = apptDate;
    apptTimeTag.innerHTML = apptTime;
}
