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

$("button").on("click", function(){
  var tFrequency = $("#train-frequency").val();
  var firstTime = $("#train-time").val();
  var trainName = $("#train-name").val();
  var trainDestination = $("#train-destination").val();

  var newTrain = {
    name: trainName,
    frequency: tFrequency,
    startTime: firstTime,
    place: trainDestination
  };

  database.ref().push(newTrain);

  var tFrequency = $("#train-frequency").val("");
  var firstTime = $("#train-time").val("");
  var trainName = $("#train-name").val("");
  var trainDestination = $("#train-destination").val("");


});

database.ref().on("child_added", function(childSnapshot) {

  var tName = childSnapshot.val().name;
  var tFreq = childSnapshot.val().frequency;
  var tStart = childSnapshot.val().startTime;
  var tPlace = childSnapshot.val().place;

console.log(tName);
console.log(tFreq);
console.log(tStart);
console.log(tPlace);


 var firstTimeConverted = moment(tStart, "HH:mm").subtract(1, "years");

 var currentTime = moment();
 console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

 var diffTime = moment().diff(moment(firstTimeConverted), "minutes");

 var tRemainder = diffTime % tFreq;
 console.log(tRemainder);

 var tMinutesTillTrain = tFreq - tRemainder;

 var nextTrain = moment().add(tMinutesTillTrain, "minutes");
 console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

});