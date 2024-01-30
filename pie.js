var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["HTML&CSS"],
    datasets: [{
      backgroundColor: [
        "#39CCCC",
        "#fff",
      ],
      data: [80,20]
    }]
  }
});
var ctx = document.getElementById("myChart1").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Javascript"],
    datasets: [{
      backgroundColor: [
        "#FF4136",
        "#fff",
      ],
      data: [70,30]
    }]
  }
});
var ctx = document.getElementById("myChart2").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Python"],
    datasets: [{
      backgroundColor: [
        "#001f3f",
        "#fff",
      ],
      data: [75,25]
    }]
  }
});
var ctx = document.getElementById("myChart3").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["C"],
    datasets: [{
      backgroundColor: [
        "#01FF70",
        "#fff",
      ],
      data: [80,20]
    }]
  }
});
var ctx = document.getElementById("myChart4").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["PHP"],
    datasets: [{
      backgroundColor: [
        "#C71585",
        "#fff",
      ],
      data: [55,45]
    }]
  }
});
var ctx = document.getElementById("myChart5").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Java"],
    datasets: [{
      backgroundColor: [
        "#CD5C5C",
        "#fff",
      ],
      data: [70,30]
    }]
  }
});
var ctx = document.getElementById("myChart6").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Communication"],
    datasets: [{
      backgroundColor: [
        "#FF851B",
        "#fff",
      ],
      data: [75,25]
    }]
  }
});
