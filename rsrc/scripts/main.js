window.onload = function(){
    var hamburger = document.querySelector(".hamburger-menu");
    var b1 = document.querySelector(".one");
    var b2 = document.querySelector(".two");
    var b3 = document.querySelector(".three");
    var panel = document.querySelector(".left-panel");
    var cline = document.querySelector(".c-line");
    var pline = document.querySelector(".p-line");
    var port = document.querySelector(".port");
    var cont = document.querySelector(".cont");
    var is_clicked = true;

    function hamOpen() {
        panel.style.left = "-280px";
        b1.style.width = "15px";
        b2.style.width = "15px";
        b2.style.transform = "translateY(8px)"
        b3.style.width = "30px";
        b3.style.transform = "translateY(-8px)"
    }

    function hamClose() {
        panel.style.left = "0";
        b1.style.width = "30px";
        b2.style.width = "15px";
        b2.style.transform = "translateY(0px)";
        b3.style.width = "30px";
        b3.style.transform = "translateY(0px)";
    }

    function ChoverIn() {
        cline.style.transform = "scaleX(4)";
    }

    function ChoverOut() {
        cline.style.transform = "scaleX(1)";
    }

    
    function PhoverIn() {
        pline.style.transform = "scaleX(5)";
    }

    function PhoverOut() {
        pline.style.transform = "scaleX(1)";
    }

    setTimeout(() => {
        hamburger.click();
    }, 0);

    hamburger.onclick = function() {
        if(is_clicked){
            is_clicked = false;
            hamClose();
        } else {
            is_clicked = true;
            hamOpen();
        }
    }

    cont.onmouseover = function() {
        ChoverIn();
    }
    port.onmouseover = function() {
        PhoverIn();
    }
    cont.onmouseout = function() {
        ChoverOut();
    }
    port.onmouseout = function() {
        PhoverOut();
    }

}