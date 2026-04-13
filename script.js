new Chart(document.getElementById("energyChart"), {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Energy (kWh)",
      data: [450, 390, 430, 350, 320, 290],
      borderColor: "#16a34a",
      backgroundColor: "rgba(22,163,74,0.15)",
      tension: 0.4,
      fill: true
    }]
  }
});

new Chart(document.getElementById("waterChart"), {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Water (Liters)",
      data: [900, 820, 860, 780, 740, 680],
      borderColor: "#2563eb",
      backgroundColor: "rgba(37,99,235,0.15)",
      tension: 0.4,
      fill: true
    }]
  }
});

new Chart(document.getElementById("carbonChart"), {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "CO₂ (kg)",
      data: [260, 230, 250, 210, 180, 160],
      backgroundColor: "#4b5563"
    }]
  }
});
