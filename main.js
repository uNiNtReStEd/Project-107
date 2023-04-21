var dog
var cat
var tiger
var elephant

function start_classification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JujZHTL7j/model.json', modelLoaded);
}

function modelLoaded()
{
    classifier.classify(gotResults);    
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);

       
        document.getElementById("sound_heard").innerHTML = results[0].label;
        document.getElementById("sound_accuracy").innerHTML = results[0].confidence.toFixed(2)*100 + "%";

     
        if(results[0].label == "Roaring")
        {
            pic.src = "meow.jpg";

            lion=lion+1;

            document.getElementById("repeat").innerHTML = tiger;
        }
        else if(results[0].label == "Barking")
        {
            pic.src = "dog.webp";

            dog=dog+1;

            document.getElementById("repeat").innerHTML = dog;
        }
        else if(results[0].label == "Meowing")
        {
            pic.src = "cat.jpg";

            cat=cat+1;

            document.getElementById("repeat").innerHTML = cat;
        }
        else if(results[0].label == "Trumpeting")
        {
            pic.src = "tusker.jpg";

            elephant = elephant+1;
            
            document.getElementById("repeat").innerHTML = elephant;
        }
        else
        {
            pic.src = "5021018.png";
        }
       
        random_r = Math.floor(Math.random()*255)+1;
        random_g = Math.floor(Math.random()*255)+1;
        random_b = Math.floor(Math.random()*255)+1;

        

// Update the heading tag to display the count of animal sounds detected
document.getElementById("repeat").innerHTML = "Dogs: " + dog + ", Cats: " + cat + ", Tigers: " + tiger + ", Elephants: " + elephant;

// Update the heading tag to display the sound name detected
document.getElementById("sound_heard").innerHTML = results[0].label;

// Update the color of the heading tags with the random RGB values
document.getElementById("sound_heard").style.color = "rgb("+random_r+","+random_g+","+random_b+")";
document.getElementById("sound_accuracy").style.color = "rgb("+random_r+","+random_g+","+random_b+")";
document.getElementById("repeat").style.color = "rgb("+random_r+","+random_g+","+random_b+")";         
        }
        }

