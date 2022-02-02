// Bagian Tentang
function openAbout(){
    document.getElementsByClassName("about-modal")[0].style.display = "block";
}
document.getElementsByClassName("about-close")[0].onclick = function(){
    document.getElementsByClassName("about-modal")[0].style.display = "none";
}

// Bagian Antarmuka Fungsi
function firstFunction(){
    document.getElementsByClassName("function1-modal")[0].style.display = "block";
}
document.getElementsByClassName("function1-close")[0].onclick = function(){
    document.getElementsByClassName("function1-modal")[0].style.display = "none";
}

function secondFunction(){
    document.getElementsByClassName("function2-modal")[0].style.display = "block";
}
document.getElementsByClassName("function2-close")[0].onclick = function(){
    document.getElementsByClassName("function2-modal")[0].style.display = "none";
}

// Perintah Fungsi
// Fungsi 1
function firstResult(){
    document.getElementsByClassName("answer1-modal")[0].style.display = "block";
    var Angle = document.getElementById("firstfunctionangle").value;
    var Length = document.getElementById("firstfunctionlength").value;
    var Sin = Math.sin(Angle * Math.PI / 180);
    var Cos = Math.cos(Angle * Math.PI / 180);
    var SinLength = Math.round(Math.sin(Angle * Math.PI / 180) * Length);
    var CosLength = Math.round(Math.cos(Angle * Math.PI / 180) * Length);
    let Answer = SinLength * CosLength * 0.5; 
    document.getElementsByClassName("sinvalue")[0].innerHTML = Sin;
    document.getElementsByClassName("cosvalue")[0].innerHTML = Cos;
    document.getElementsByClassName("sinlength")[0].innerHTML = SinLength;
    document.getElementsByClassName("coslength")[0].innerHTML = CosLength;
    document.getElementsByClassName("sinlength")[1].innerHTML = SinLength;
    document.getElementsByClassName("coslength")[1].innerHTML = CosLength;
    document.getElementsByClassName("answer")[0].innerHTML = Answer;
}
document.getElementsByClassName("answer1-close")[0].onclick = function(){
    document.getElementsByClassName("answer1-modal")[0].style.display = "none";
}

// Fungsi 2
function secondResult(){
    document.getElementsByClassName("answer2-modal")[0].style.display = "block";
    var Angle = document.getElementById("secondfunctionangle").value;
    var Length = document.getElementById("secondfunctionlength").value;
    var Sin = Math.sin(Angle * Math.PI / 180);
    var Cos = Math.cos(Angle * Math.PI / 180);
    var SinLength = Math.round(Math.sin(Angle * Math.PI / 180) * Length);
    var CosLength = Math.round(Math.cos(Angle * Math.PI / 180) * Length);
    let Answer = 1 * Length + SinLength + CosLength; 
    document.getElementsByClassName("sinvalue")[1].innerHTML = Sin;
    document.getElementsByClassName("cosvalue")[1].innerHTML = Cos;
    document.getElementsByClassName("sinlength")[2].innerHTML = SinLength;
    document.getElementsByClassName("coslength")[2].innerHTML = CosLength;
    document.getElementsByClassName("length")[0].innerHTML = Length;
    document.getElementsByClassName("sinlength")[3].innerHTML = SinLength;
    document.getElementsByClassName("coslength")[3].innerHTML = CosLength;
    document.getElementsByClassName("answer")[1].innerHTML = Answer;
}
document.getElementsByClassName("answer2-close")[0].onclick = function(){
    document.getElementsByClassName("answer2-modal")[0].style.display = "none";
}