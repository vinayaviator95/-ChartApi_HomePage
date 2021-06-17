const day = document.getElementById("day").getContext("2d");

let dayChart = new Chart(day, {
  type: "line",
  data: {
    labels: [
      "May18",
      "May19",
      "May20",
      "May20",
      "May20",
      "May21",
      "May22",
      "May23",
      "May24",
      "May25",
      "May26",
      "May27",
      "May28",
      "May29",
      "May30",
      "May31",
      "Jun1",
      "Jun2",
      "Jun3",
      "Jun4",
      "Jun5",
      "Jun6",
      "Jun7",
      "Jun8",
      "Jun9",
      "Jun10",
      "Jun11",
      "Jun12",
      "Jun13",
      "Jun14",
      "Jun15",
    ],

    datasets: [
      {
        label: "Current Consumption",
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0,
        ],
        tension: 0.4,
        borderColor: "#63a4c9",
        backgroundColor: "#63a4c9",
      },
    ],
  },
  options: {
    elements: {
      point: {
        radius: 0,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Current Consumption",
        font: {
          size: 22,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Mar 16, 2021 to jun 15,2021",
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Power",
        },
        min: -1,
        max: 1,
        ticks: {
          callback: function (value, index, values) {
            return value + " Wh";
          },
        },
        grid: {
          display: false,
        },
      },
    },
  },
});

const rowtwo_first = document.getElementById("rowtwo_first").getContext("2d");

let rowtwo_firstChart = new Chart(rowtwo_first, {
  type: "bar",
  data: {
    labels: [1, 2, 3, 4],
    datasets: [
      {
        label: "Active Power",
        data: [10, 29, 37, 48],
        tension: 0.4,
        borderColor: "#9999ff",
        backgroundColor: "#9999ff",
      },
      {
        label: "Reactive Power",
        data: [0, 6, 7, 8],
        borderColor: " #66ccff",
        backgroundColor: " #66ccff",
      },
      {
        label: "Apparent Power",
        data: [9, 10, 11, 12],
        borderColor: "#ff9933",
        backgroundColor: "#ff9933",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 8,
          },
        },
      },
      title: {
        display: false,
        text: "Avg. Temperature vs Current",
        font: {
          size: 22,
        },
      },
    },
    scales: {
      y: {
        min: 5,
        max: 50,
      },
    },
  },
});

const rowtwo_third = document.getElementById("rowtwo_third").getContext("2d");

let rowtwo_thirdChart = new Chart(rowtwo_third, {
  type: "line",
  data: {
    labels: [
      "May18",
      "May19",
      "May20",
      "May20",
      "May20",
      "May21",
      "May22",
      "May23",
      "May24",
      "May25",
      "May26",
      "May27",
      "May28",
      "May29",
      "May30",
      "May31",
      "Jun1",
      "Jun2",
      "Jun3",
      "Jun4",
      "Jun5",
      "Jun6",
      "Jun7",
      "Jun8",
      "Jun9",
      "Jun10",
      "Jun11",
      "Jun12",
      "Jun13",
      "Jun14",
      "Jun15",
    ],

    datasets: [
      {
        label: "Current Consumption",
        data: [],
        tension: 0.4,
        borderColor: "#63a4c9",
        backgroundColor: "#63a4c9",
      },
    ],
  },
  options: {
    elements: {
      point: {
        radius: 0,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Current Consumption",
        font: {
          size: 22,
        },
      },
    },
    scales: {
      x: {
        min: 0,
        max: 1,
        title: {
          display: true,
          text: "Mar 16, 2021 to jun 15,2021",
        },
        ticks: {
          callback: function (value, index, values) {
            return value + " W";
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Power",
        },
        min: 0,
        max: 1,
        ticks: {
          callback: function (value, index, values) {
            return value + " W";
          },
        },
        grid: {
          display: false,
        },
      },
    },
  },
});

const rowtwo_forth = document.getElementById("rowtwo_forth").getContext("2d");

let rowtwo_forthChart = new Chart(rowtwo_forth, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "change in cost",
        data: [12, 19, 3, 5, 2, 3],
        borderColor: [
          "#ff99ae",
          "#7dc0ee",
          "#ffe096",
          "#8cd5d5",
          "#c8acfd",
          "#feb56c",
        ],
        backgroundColor: [
          "#ff99ae",
          "#7dc0ee",
          "#ffe096",
          "#8cd5d5",
          "#c8acfd",
          "#feb56c",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 8,
          },
        },
      },
      title: {
        display: false,
        text: "Avg. Temperature vs Current",
        font: {
          size: 22,
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 20,
      },
    },
  },
});

const months = document.getElementById("months").getContext("2d");

let monthsCharts = new Chart(months, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "",
        data: [0.3, 7.8, 5.6, 5.4, 4.2, 6, 2],
        borderColor: ["#ff751a"],
        backgroundColor: ["#ff751a"],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Avg. Temperature vs Current",
        font: {
          size: 22,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Current Year:2021",
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Power",
        },
        min: 0.0,
        max: 10.0,
        ticks: {
          callback: function (value, index, values) {
            return value + " KWh";
          },
        },
        grid: {
          display: true,
        },
      },
    },
  },
});


const tagone = document.getElementById("tag1").getContext("2d");
let tagonechart = new Chart(tag1, {
  type: "doughnut",
  data: {
    labels: ["c1", "c2"],
    datasets: [
      {
        label: "Current",
        data: [90,30],
        backgroundColor:  ['#4c84ff',"#e6e6e6"],
        borderColor: ['#4c84ff',"#e6e6e6"]
      },
    ],
  },
  options: {
    cutout: "70%",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
    },
  },
});


const tagtwo = document.getElementById("tag2").getContext("2d");
let tagtwochart = new Chart(tag2, {
  type: "doughnut",
  data: {
    labels: ["v1", "v2"],
    datasets: [
      {
        label: "Voltage",
        data: [1,30],
        backgroundColor:  ["#e6e6e6",'#fec402'],
        borderColor: ["#e6e6e6",'#fec402']
      },
    ],
  },
  options: {
    cutout: "70%",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
    },
  },
});