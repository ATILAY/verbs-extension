
async function fetchData() {
    let randomOrder = Math.floor(Math.random() * 5151); // Random number between 0 and 5150

    console.log(window.engVerbs)
    // const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
    // const record=await res.json();
    document.getElementById("eng-elem").innerHTML=engVerbs[randomOrder] || "err"
    // document.getElementById("areaName").innerHTML=record.data[0].areaName;
    // document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
    // document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
}
fetchData();