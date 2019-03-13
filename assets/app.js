var config = {
  apiKey: "AIzaSyCOxJQE-QUsDllipq-L6RxT-gf2kACMJJY",
  authDomain: "tjm-train.firebaseapp.com",
  databaseURL: "https://tjm-train.firebaseio.com",
  projectId: "tjm-train",
  storageBucket: "tjm-train.appspot.com",
  messagingSenderId: "549116012693"
};
firebase.initializeApp(config);

var database = firebase.database();

 var tFrequency = $("#train-frequency").val();

 var firstTime = $("#train-time").val();

 var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
 console.log(firstTimeConverted);

 // Current Time
 var currentTime = moment();
 console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

function trainInfo(){
 var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
 console.log("DIFFERENCE IN TIME: " + diffTime);

 // Time apart (remainder)
 var tRemainder = diffTime % tFrequency;
 console.log(tRemainder);

 // Minute Until Train
 var tMinutesTillTrain = tFrequency - tRemainder;
 console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

 // Next Train
 var nextTrain = moment().add(tMinutesTillTrain, "minutes");
 console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
};

$("button").on("click", function(){
  trainInfo();

});