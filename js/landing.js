var promptOn = confirm("Kindly turn on permissions for Audio and Video in the address bar above");
function landingvid() {

    console.log("getting to func");
    var vid = document.createElement("video");
    vid.src = "assets/mp4/landingvid.mp4"
    viddiv = document.getElementById("videodiv");
    vid.autoplay = true;
    viddiv.appendChild(vid);
    vid.addEventListener('ended', function() {
        window.location = 'mainpage.html';
    });
}

function characvid() {
    window.location.reload();
}


//vid.onended = function() {

//        window.location = 'landingpage.html';
//  }
//vid.addEventListener('ended', function() {
//    alert('video is ended');
//   window.location.pathname = 'landingpage.html';
//  })
//onload="vidfunc"

//console.log("getting tp the end");
//window.history.go(-2);
//window.location = "landingpage.html";
//window.location.pathname = "landingpage.html"
// console.log("endd");


//}


//}
//var img = new Image();
//div = document.getElementById('x');
//img.onload = function() {
//   div.appendChild(img);
//};

// img.src = "tinytan/landimg.png";
//console.log(img);
