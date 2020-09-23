var SpeechRecognition = window.webkitSpeechRecognition;
var Display_Speech = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = " ";
    Display_Speech.start();
}

Display_Speech.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if(content == "take my selfie")
    {
        speak();
        console.log("**********");
    }
}

function speak()
{
    var speak_man = window.speechSynthesis;
    speak_data = document.getElementById("textbox").value;
    var utter_man = new SpeechSynthesisUtterance(speak_data);
    speak_man.speak(utter_man);
    Webcam.attach(camera);
}
camera = document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
   });
  