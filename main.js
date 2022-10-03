function start()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kVhkSBPCS/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("animal").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("accurancy").innerHTML = 'Accurancy - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("animal").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("accurancy").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img1 = document.getElementById('cat');
        img2 = document.getElementById('snake');
        img3 = document.getElementById('dog');
        img4 = document.getElementById('lion');

        if(results[0].label == "cat") {
            img1.src = 'cat.gif'
            img2.src = 'snake.jpg'
            img3.src = 'dog.jpg'
            img4.src = 'lion.jpg'

        }
        else if (results[0].label == "snake") {
            img1.src = 'cat.jpg'
            img2.src = 'snake.gif'
            img3.src = 'dog.jpg'
            img4.src = 'lion.jpg'
        }
        else if (results[0].label == "dog") {
            img1.src = 'cat.jpg'
            img2.src = 'snake.jpg'
            img3.src = 'dog.gif'
            img4.src = 'lion.jpg'
        }
        else{
            img1.src = 'cat.jpg'
            img2.src = 'snake.jpg'
            img3.src = 'dog.jpg'
            img4.src = 'lion.gif'
        }
    }
}