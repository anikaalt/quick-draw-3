random_number = math.floor
score = 0
function preload()
{
classifier = ml5.imageClassifier('DoodleNet');
}
function setup()
{
 canvas=createCanvas(300, 300);
 canvas.center();
 background("white");
 canvas.mouseReleased(classifyCanvas);
}
function draw()
{

    strokeWeight (13);
    stroke(0);
    if(mouseIsPressed)
    {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    
}
check_sketch()
if(draw_sketch == sketch){
answer_holder="set";
score++;
document.getElementById("scores").innerHTML = 'score'+score;
}

function createCanvas()
{
    background("white");
}
function updateCanvas()
{
    background("white")
}
function check_sketch(){
    timer_counter++
    document.getElementById("timer").innerHTML = 'timer'+timer_counter;
    if(timer_counter>0){
        timer_counter = 0;
        timer_check = "completed";
    }
    if(timer_check == "completed"||answer_holder == "set")
    {
        timer_check = "";
        answer_holder = "";
        updateCanvas();
    }
}
function classifyCanvas()
{
    classifier.classify(canvas, gotResults)
}
function gotResults(error, results) 
{
    if(error){
        console.error(error);
    }
    console.log(results);
    document.getElementById("label1").innerHTML = "Label is "+ results[0].label;
    document.getElementById("confidence").innerHTML = "Percantage is " + math.round(results[0].confidence * 100) + "%";
}

