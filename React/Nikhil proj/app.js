var firebaseConfig = {
  apiKey: "AIzaSyB6Izsku_qLcnr9lc0Ivj5eejB7-5FCaRE",
  authDomain: "test-form-d3492.firebaseapp.com",
  databaseURL: "https://test-form-d3492.firebaseio.com",
  projectId: "test-form-d3492",
  storageBucket: "test-form-d3492.appspot.com",
  messagingSenderId: "222398070278",
  appId: "1:222398070278:web:bf51f5c8a26dcfff9ecd87",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let sensorInfo = firebase.database().ref("infos");


  //   Get input Values
  let sensor = document.querySelector(".sensor").value;
  console.log(sensor);

  saveSensorInfo(sensor);

  document.querySelector(".sensor-form").reset();
}

// Save infos to Firebase
function saveSensorInfo(sensor) {
  let newSensorInfo = sensorInfo.push();

  newSensorInfo.set({
    sensor: sensor,
  });
}

// Retrieve Infos
function retrieveInfos() {
    let ref = firebase.database().ref("infos");
    ref.on("value", gotData);
}

function gotData(data) {
    let info = data.val();
    let keys = Object.keys(info);

    for (let i = 0; i < keys.length; i++) {
        let infoData = keys[i];
        let sensor = info[infodata].sensor;
        console.log(sensor);

        let infosResults = document.querySelector(".infosResults");

        infosResults.innerHTML += <div>
        <p><strong>Sensor: <strong/>${sensor} <br/>
        </p></div>;


    }
}