

document.getElementById("get-activity").addEventListener("click", function() {
  document.getElementById("activity").textContent = 'L o a d i n g...'
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.activity
    })
})