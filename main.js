function StartClass(){
    navigator.mediaDevices.getUserMedia({audio:true}); 
    classifier - ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/RJnd9Lj0T/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults); 
}