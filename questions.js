let btn1 = document.getElementById('ans1');
let btn2 = document.getElementById('ans2');
let btn3 = document.getElementById('ans3');

let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');

let mood1 = "open";
let mood2 = "open";
let mood3 = "open";

btn1.addEventListener('click', function(){
    answer1.classList.toggle("hide");
    answer2.classList.add("hide");
    answer3.classList.add("hide");
    if (mood1 === 'open'){
        mood1 = 'close';
    }
    else{
        mood1 = 'open';
    }

    write(answer1, btn1);
    write(answer2, btn2);
    write(answer3, btn3);

})

btn2.addEventListener('click', function(){
    answer1.classList.add("hide");
    answer2.classList.toggle("hide");
    answer3.classList.add("hide");
    if (mood2 === 'open'){
        btn2.innerText = '-';
        mood2 = 'close';
    }
    else{
        btn2.innerText = '+';
        mood2 = 'open';
    }

    write(answer1, btn1);
    write(answer2, btn2);
    write(answer3, btn3);

})

btn3.addEventListener('click', function(){
    answer1.classList.add("hide");
    answer2.classList.add("hide");
    answer3.classList.toggle("hide");
    if (mood3 === 'open'){
        btn3.innerText = '-';
        mood3 = 'close';
    }
    else{
        btn3.innerText = '+';
        mood3 = 'open';
    }

    write(answer1, btn1);
    write(answer2, btn2);
    write(answer3, btn3);

})

function write(x, btn){
    if (x.classList.contains("hide")) {
        btn.innerText = '+';
    }
    else {
        btn.innerText = '-';
    }
}