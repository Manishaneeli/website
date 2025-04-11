document.getElementById("stressForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const hr = parseInt(document.getElementById("heartRate").value);
  const sleep = parseInt(document.getElementById("sleepHours").value);
  const mood = document.getElementById("mood").value;

  let stressType = "";

  if (mood === "calm" && sleep >= 7 && hr < 75) {
    stressType = "No Stress";
  } else if (mood === "anxious" || (hr >= 90 && sleep < 6)) {
    stressType = "Academic Stress";
  } else if (mood === "irritable" || hr > 100) {
    stressType = "Work-Related Stress";
  } else if (mood === "overwhelmed" || sleep < 4) {
    stressType = "Personal Stress";
  } else if (mood === "sad" || (sleep >= 6 && hr < 80)) {
    stressType = "Social Stress";
  } else {
    stressType = "Mild Stress";
  }

  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `<strong>Detected Stress Type:</strong> ${stressType}`;
});
