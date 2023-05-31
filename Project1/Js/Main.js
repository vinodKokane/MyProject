let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

// count first
let count = setInterval(set_Count, 10);
let start = 1000;

function set_Count() {
  let num1 = document.querySelector(".num1");
  num1.innerHTML = ++start;
  if (start == 1505) {
    clearInterval(count);
  }
}
// -------------------------

//count2-----------------------
let count2 = setInterval(set_Count_2, 50);
let start2 = 10;

function set_Count_2() {
  let num2 = document.querySelector(".num2");
  num2.innerHTML = ++start2;
  if (start2 == 80) {
    clearInterval(count2);
  }
}
// ----------------------------

let count3 = setInterval(set_Count_3, 50);
let start3 = 150;

function set_Count_3() {
  let num3 = document.querySelector(".num3");
  num3.innerHTML = ++start3;
  if (start3 == 285) {
    clearInterval(count3);
  }
}

// --------------------------------
let count4 = setInterval(set_Count_4, 5);
let start4 = 6500;

function set_Count_4() {
  let num4 = document.querySelector(".num4");
  num4.innerHTML = ++start4;
  if (start4 == 7200) {
    clearInterval(count4);
  }
}
// -------------------------------------

//================chart js=========
window.onload = function () {
  var dps = [];
  var chart = new CanvasJS.Chart("chartContainer", {
    exportEnabled: true,
    title: {
      text: "Stock Chart",
    },
    data: [
      {
        type: "spline",
        markerSize: 0,
        dataPoints: dps,
      },
    ],
  });

  // ==============chart ==============
  var xVal = 5001;
  var yVal = 10000;
  var updateInterval = 1000;
  var dataLength = 50; // number of dataPoints visible at any point

  var updateChart = function (count) {
    count = count || 1;
    // count is number of times loop runs to generate random dataPoints.
    for (var j = 0; j < count; j++) {
      yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
      dps.push({
        x: xVal,
        y: yVal,
      });
      xVal++;
    }
    if (dps.length > dataLength) {
      dps.shift();
    }
    chart.render();
  };

  updateChart(dataLength);
  setInterval(function () {
    updateChart();
  }, updateInterval);
};

// table filter
function myfunction() {
  var input, filter, table, tr, td, i, txtValue;
  
  input = document.getElementById("myInput");
  
  filter = input.value.toUpperCase();
  
  table = document.getElementById("myTable");
  
  tr = table.getElementsByTagName("tr");
  
  for (i = 0; i < tr.length; i++) {
  
    td = tr[i].getElementsByTagName("td")[0];
  
    if (td) {
  
        txtValue = td.textContent || td.innerText;
  
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
  
            tr[i].style.display = "";
  
        } else {
  
            tr[i].style.display = "none";
      }
    }
  }
}
