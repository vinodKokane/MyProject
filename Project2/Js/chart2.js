const ctxSecond = document.getElementById("doughnut").getContext("2d");

new Chart(ctxSecond, {
  type: "doughnut",
  data: {
    labels: ["Acadmic", "Non-Acadmic", "Administration", "other"],
    datasets: [
      {
        label: "Employees",
        data: [42, 11, 5, 7],
        borderWidth: 1,
        backgroundColor: [
          "rgba(41,155,99,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(120,46,139,1)",
        ],
        borderColor: [
          "rgba(41,155,99,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(120,46,139,1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
