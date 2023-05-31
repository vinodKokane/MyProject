const ctxFirst = document.getElementById("myChart");

new Chart(ctxFirst, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sapt","Oct","Nov","Dec"],
    datasets: [
      {
        label: "Earning in $",
        data: [2800, 3000, 3400, 3900, 3100, 3700,3600,4100,3600,3200],
        borderWidth: 5,
        backgroundColor:[
            'rgba(25, 190, 3, 0.527)'
        ],
        borderColor:[
            'rgb(30,150,90)'
        ],
      },
    ],
  },
  options: {
   responsive:true,
  },
});
