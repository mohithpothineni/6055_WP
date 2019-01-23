//data for quiz
var quiz = {
    "questions": [{
            "question": "What is the scientific name of a butterfly?",
            "answers": [
                "Apis",
                "Coleoptera",
                "Formicidae",
                "Rhopalocera"
            ],
            "f1": "Correct",
            "f2": "InCorrect",
            "hint" : "The option starts with letter R",
            "correctIndex": 3
        },
        {
            "question": "How hot is the surface of the sun?",
            "answers": [
                "1,233 K",
                "5,778 K",
                "12,130 K",
                "101,300 K"
            ],
            "hint" : "The value is less than 6000 K",
            "f1": "Correct",
            "f2": "InCorrect",
            "correctIndex": 1
        },
        {
            "question": "Who are the actors in The Internship?",
            "answers": [
                "Ben Stiller, Jonah Hill",
                "Courteney Cox, Matt LeBlanc",
                "Kaley Cuoco, Jim Parsons",
                "Vince Vaughn, Owen Wilson"
            ],
            "f1": "Correct",
            "f2": "InCorrect",
            "hint" : "One of the actor is Vince Vaughn",
            "correctIndex": 3
        },
        {
            "question": "What is the capital of Spain?",
            "answers": [
                "Berlin",
                "Buenos Aires",
                "Madrid",
                "San Juan"
            ],
            "f1": "Correct",
            "f2": "InCorrect",
            "hint" : "starts with M",
            "correctIndex": 2
        },
        {
            "question": "What are the school colors of the University of Texas at Austin?",
            "answers": [
                "Black, Red",
                "Blue, Orange",
                "White, Burnt Orange",
                "White, Old gold, Gold"
            ],
            "f1": "Correct",
            "f2": "InCorrect",
            "hint" : "One of the color is white",
            "correctIndex": 2
        },
        {
            "question": "What is 70 degrees Fahrenheit in Celsius?",
            "answers": [
                "18.8889",
                "20",
                "21.1111",
                "158"
            ],
            "f1": "Correct",
            "f2": "InCorrect",
            "hint" : "It is nearly 21",
            "correctIndex": 2
        },
        {
            "question": "When was Mahatma Gandhi born?",
            "answers": [
                "October 2, 1869",
                "December 15, 1872",
                "July 18, 1918",
                "January 15, 1929"
            ],
            "f1": "Correct",
            "f2": "InCorrect",
            "hint" : "In October",
            "correctIndex": 0
        },
        {
            "question": "How far is the moon from Earth?",
            "answers": [
                "7,918 miles (12,742 km)",
                "86,881 miles (139,822 km)",
                "238,400 miles (384,400 km)",
                "35,980,000 miles (57,910,000 km)"
            ],
            "f1": "Correct",
            "f2": "InCorrect",
            "hint" : "It's greater than 300k km",
            "correctIndex": 2
        },
        {
            "question": "What is 65 times 52?",
            "answers": [
                "117",
                "3120",
                "3380",
                "3520"
            ],
            "f1": "Correct",
            "f2": "InCorrect",
            "hint" : "It is greater than 3300",
            "correctIndex": 2
        },
        {
            "question": "How tall is Mount Everest?",
            "answers": [
                "6,683 ft (2,037 m)",
                "7,918 ft (2,413 m)",
                "19,341 ft (5,895 m)",
                "29,029 ft (8,847 m)"
            ],
            "f1": "Correct",
            "f2": "InCorrect",
            "hint" : "It's approximately equal to 29K ft",
            "correctIndex": 3
        },
        {
            "question": "When did The Avengers come out?",
            "answers": [
                "May 2, 2008",
                "May 4, 2012",
                "May 3, 2013",
                "April 4, 2014"
            ],
            "f1": "Correct",
            "f2": "InCorrect",
            "hint" : "In year 2012",
            "correctIndex": 1
        },
        {
            "question": "What is 48,879 in hexidecimal?",
            "answers": [
                "0x18C1",
                "0xBEEF",
                "0xDEAD",
                "0x12D591"
            ],
            "f1": "Correct",
            "f2": "InCorrect",
            "hint" : "divide the number by 16, remiders together will get hexadecimal value.",
            "correctIndex": 1
        }
    ]
};

//reference variables
var i =0;
var j= 0;

//when page run displays the intial set
window.onload =function display() {
    document.getElementById('question1').innerHTML = quiz.questions[i].question
    document.getElementById('hint1').innerHTML = quiz.questions[i].hint
    document.getElementById('radio1').innerHTML = '<input type = "radio" name = "q1" value = "option 1" onclick="radioclicked('+i+','+j+')">' + quiz.questions[i].answers[j] + '<br>'
                                                +'<input type = "radio" name = "q1" value = "option 2" onclick="radioclicked('+i+','+j+1+')">' + quiz.questions[i].answers[j+1] + '<br>'
                                                +'<input type = "radio" name = "q1" value = "option 3" onclick="radioclicked('+i+','+j+2+')">' + quiz.questions[i].answers[j+2] + '<br>'
                                                +'<input type = "radio" name = "q1" value = "option 4" onclick="radioclicked('+i+','+j+3+')">' + quiz.questions[i].answers[j+3] + '<br>'
    document.getElementById('question2').innerHTML = quiz.questions[i+1].question
    document.getElementById('hint2').innerHTML = quiz.questions[i+1].hint
    document.getElementById('radio2').innerHTML = '<input type = "radio" name = "q2" value = "option 1" onclick="radioclicked1('+(i+1)+','+j+')">' + quiz.questions[i+1].answers[j] + '<br>'
                                                +'<input type = "radio" name = "q2" value = "option 2" onclick="radioclicked1('+(i+1)+','+j+1+')">' + quiz.questions[i+1].answers[j+1] + '<br>'
                                                +'<input type = "radio" name = "q2" value = "option 3" onclick="radioclicked1('+(i+1)+','+j+2+')">' + quiz.questions[i+1].answers[j+2] + '<br>'
                                                +'<input type = "radio" name = "q2" value = "option 4" onclick="radioclicked1('+(i+1)+','+j+3+')">' + quiz.questions[i+1].answers[j+3] + '<br>'
    
    //intially prev button is hidden
    hideButton('Prev');
};

//question1 radio button clicked
//i-question index
//j-answer index
function radioclicked(i,j) {
    if (quiz.questions[i].correctIndex == j) {
        code=''
        code += '<div class="alert alert-success alert-dismissible lol">'
        code += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
        code += '<span class="glyphicon glyphicon-ok"></span>'
                +'<strong>'+quiz.questions[i].f1+'</strong>'
        document.getElementById('feedback1').innerHTML = code
    } else {
        code=''
        code += '<div class="alert alert-danger alert-dismissible">'
        code += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
        code += '<span class="glyphicon glyphicon-remove"></span>'
                +'<strong>'+quiz.questions[i].f2+'</strong>'
        document.getElementById('feedback1').innerHTML = code
    }
}

//question1 radio button clicked
//i-question index
//j-answer index
function radioclicked1(i,j) {
    if (quiz.questions[i].correctIndex == j) {
        code=''
        code += '<div class="alert alert-success alert-dismissible lol">'
        code += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
        code += '<span class="glyphicon glyphicon-ok"></span>'
                +'<strong>'+quiz.questions[i].f1+'</strong>'
        document.getElementById('feedback2').innerHTML = code
    } else {
        code=''
        code += '<div class="alert alert-danger alert-dismissible">'
        code += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
        code += '<span class="glyphicon glyphicon-remove"></span>'
                +'<strong>'+quiz.questions[i].f2+'</strong>'
        document.getElementById('feedback2').innerHTML = code
    }
}


//previous functionality
function  prev() {
    i = i-2;
    if (i < 0){
        i = 0;
        hideButton('Prev')
        return
    }
    showButton('Prev')
    showButton('Next')
    document.getElementById('question1').innerHTML = quiz.questions[i].question
    document.getElementById('hint1').innerHTML = quiz.questions[i].hint
    document.getElementById('radio1').innerHTML = '<input type = "radio" name = "q1" value = "option 1" onclick="radioclicked('+i+','+j+')">' + quiz.questions[i].answers[j] + '<br>'
                                                +'<input type = "radio" name = "q1" value = "option 2" onclick="radioclicked('+i+','+j+1+')">' + quiz.questions[i].answers[j+1] + '<br>'
                                                +'<input type = "radio" name = "q1" value = "option 3" onclick="radioclicked('+i+','+j+2+')">' + quiz.questions[i].answers[j+2] + '<br>'
                                                +'<input type = "radio" name = "q1" value = "option 4" onclick="radioclicked('+i+','+j+3+')">' + quiz.questions[i].answers[j+3] + '<br>'
    document.getElementById('question2').innerHTML = quiz.questions[i+1].question
    document.getElementById('hint2').innerHTML = quiz.questions[i+1].hint
    document.getElementById('radio2').innerHTML = '<input type = "radio" name = "q2" value = "option 1" onclick="radioclicked1('+(i+1)+','+j+')">' + quiz.questions[i+1].answers[j] + '<br>'
                                                +'<input type = "radio" name = "q2" value = "option 2" onclick="radioclicked1('+(i+1)+','+j+1+')">' + quiz.questions[i+1].answers[j+1] + '<br>'
                                                +'<input type = "radio" name = "q2" value = "option 3" onclick="radioclicked1('+(i+1)+','+j+2+')">' + quiz.questions[i+1].answers[j+2] + '<br>'
                                                +'<input type = "radio" name = "q2" value = "option 4" onclick="radioclicked1('+(i+1)+','+j+3+')">' + quiz.questions[i+1].answers[j+3] + '<br>'
    if (i == 0) hideButton('Prev')
    removeresponce("alert")
    closehint("in")
}

//next functionality
function next() {
    i = i + 2
    if(i > quiz.questions.lenght - 1) {
        i = quiz.questions.lenght - 1
        hideButton('Next')
        return
    }
    showButton('Next')
    showButton('Prev')
    document.getElementById('question1').innerHTML = quiz.questions[i].question
    document.getElementById('hint1').innerHTML = quiz.questions[i].hint
    document.getElementById('radio1').innerHTML = '<input type = "radio" name = "q1" value = "option 1" onclick="radioclicked('+i+','+j+')">' + quiz.questions[i].answers[j] + '<br>'
                                                +'<input type = "radio" name = "q1" value = "option 2" onclick="radioclicked('+i+','+j+1+')">' + quiz.questions[i].answers[j+1] + '<br>'
                                                +'<input type = "radio" name = "q1" value = "option 3" onclick="radioclicked('+i+','+j+2+')">' + quiz.questions[i].answers[j+2] + '<br>'
                                                +'<input type = "radio" name = "q1" value = "option 4" onclick="radioclicked('+i+','+j+3+')">' + quiz.questions[i].answers[j+3] + '<br>'
    document.getElementById('question2').innerHTML = quiz.questions[i+1].question
    document.getElementById('hint2').innerHTML = quiz.questions[i+1].hint
    document.getElementById('radio2').innerHTML = '<input type = "radio" name = "q2" value = "option 1" onclick="radioclicked1('+(i+1)+','+j+')">' + quiz.questions[i+1].answers[j] + '<br>'
                                                +'<input type = "radio" name = "q2" value = "option 2" onclick="radioclicked1('+(i+1)+','+j+1+')">' + quiz.questions[i+1].answers[j+1] + '<br>'
                                                +'<input type = "radio" name = "q2" value = "option 3" onclick="radioclicked1('+(i+1)+','+j+2+')">' + quiz.questions[i+1].answers[j+2] + '<br>'
                                                +'<input type = "radio" name = "q2" value = "option 4" onclick="radioclicked1('+(i+1)+','+j+3+')">' + quiz.questions[i+1].answers[j+3] + '<br>'

    
    if (i == quiz.questions.length - 2) {
        hideButton('Next')
    }
    removeresponce("alert")
    closehint("in")
}

//to reset quiz
function reset(){
    location.reload();
}


//to hide prev and next buttons
//id- id of the element
function hideButton(id) {
    document.getElementById(id).style.visibility="hidden";
}

//to show prev and next buttons
//id- id of the element
function showButton(id) {
    document.getElementById(id).style.visibility="visible";
}

//to clear hints after moving to next or previous
//name- class name
function closehint(name){
    p = document.getElementsByClassName(name);
    for (var i = 0;i<p.length;i++) {
        //changing and triggering bootstrap
        p[i].setAttribute("class","collapse");
        //to avoid aliasing effect
        i--;
    }
}

//to claer responce after moving to next or previous
//name- class name
function removeresponce(name) {
    p = document.getElementsByClassName(name);
    for (var i = 0;i<p.length;i++) {
        p[i].style.setProperty("display","none");
        
    }
}






