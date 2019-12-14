// Loader

    window.onload = function(){
    this.setTimeout(function(){
    var loader = this.document.querySelector(".loader-container");
    var bars = this.document.querySelector(".bar");
        loader.style.backgroundColor = "transparent";
        bars.style.backgroundColor = "rgba(0,0,0,0)";
            setTimeout(function(){
                loader.style.display = "none";
            }, 500);
    }, 3000);
    }

// predefined variable's

    var hamburger = document.querySelector(".hamburger-menu");
    var b1 = document.querySelector(".one");
    var b2 = document.querySelector(".two");
    var b3 = document.querySelector(".three");
    var panel = document.querySelector(".left-panel");
    var cline = document.querySelector(".c-line");
    var pline = document.querySelector(".p-line");
    var port = document.querySelector(".port");
    var cont = document.querySelector(".cont");
    var p_info = document.querySelector(".p-info");
    var mainContainer = document.querySelector( ".main-container" );
    var is_clicked = true;

// Hamburger

    function hamClose() {
        // panel.style.left = "-285px";
        panel.style.left = "-350px";
        b1.style.width = "15px";
        b2.style.width = "15px";
        b2.style.transform = "translateY(8px)"
        b3.style.width = "30px";
        b3.style.transform = "translateY(-8px)"
        mainContainer.style.left = "0px";
        mainContainer.style.margin = "0 auto";
        hamburger.style.backgroundColor = "#272727";
        hamburger.style.boxShadow = "0px 0px 10px 0px #191919";
    }

    function hamOpen() {
        panel.style.left = "0";
        b1.style.width = "30px";
        b2.style.width = "15px";
        b2.style.transform = "translateY(0px)";
        b3.style.width = "30px";
        b3.style.transform = "translateY(0px)";
        mainContainer.style.left = "350px";
        mainContainer.style.margin = "";
        hamburger.style.backgroundColor = "transparent";
        hamburger.style.boxShadow = "0px 0px 10px 0px transparent";
    }

// Link hover effects

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
            hamOpen();
        } else {
            is_clicked = true;
            hamClose();
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

// P-info 

    var addr = document.querySelector(".addr");
    var eml = document.querySelector(".eml");
    var mob = document.querySelector(".mob");
    var s_addr = document.querySelector(".s-addr");
    var s_eml = document.querySelector(".s-eml");
    var s_mob = document.querySelector(".s-mob");
    var pointerI = document.querySelector(".fa-map-marker-alt");
    var mailI = document.querySelector(".fa-envelope");
    var callI = document.querySelector(".fa-phone-alt");

    addr.onmouseover = function() {
        addr.style.backgroundColor = "#2c2c2c";
        addr.style.boxShadow = "0px 0px 10px 0px #191919";
        s_addr.style.backgroundColor = "#2c2c2c";
        s_addr.style.boxShadow = "0px 0px 10px 0px #191919";
        pointerI.style.transform = "translateX(130px)";
        pointerI.style.color = "#f73838";
    }
    addr.onmouseout = function() {
        addr.style.backgroundColor = "";
        addr.style.boxShadow = "";
        s_addr.style.backgroundColor = "";
        s_addr.style.boxShadow = "";
        pointerI.style.transform = "translateX(90px)";
        pointerI.style.color = "white";
    }

    eml.onmouseover = function() {
        eml.style.backgroundColor = "#2c2c2c";
        eml.style.boxShadow = "0px 0px 10px 0px #191919";
        s_eml.style.backgroundColor = "#2c2c2c";
        s_eml.style.boxShadow = "0px 0px 10px 0px #191919";
        mailI.style.transform = "translateX(130px)";
        mailI.style.color = "dodgerblue";
    }

    eml.onmouseout = function() {
        eml.style.backgroundColor = "";
        eml.style.boxShadow = "";
        s_eml.style.backgroundColor = "";
        s_eml.style.boxShadow = "";
        mailI.style.transform = "translateX(90px)";
        mailI.style.color = "white";
    }

    mob.onmouseover = function() {
        mob.style.backgroundColor = "#2c2c2c";
        mob.style.boxShadow = "0px 0px 10px 0px #191919";
        s_mob.style.backgroundColor = "#2c2c2c";
        s_mob.style.boxShadow = "0px 0px 10px 0px #191919";
        callI.style.transform = "translateX(130px)";
        callI.style.color = "#21ff3b";
    }

    mob.onmouseout = function() {
        mob.style.backgroundColor = "";
        mob.style.boxShadow = "";
        s_mob.style.backgroundColor = "";
        s_mob.style.boxShadow = "";
        callI.style.transform = "translateX(90px)";
        callI.style.color = "white";
    }


// Contact Form Modal

    var contactModal = document.querySelector(".contact-modal");
    var form = document.querySelector("form");

    function openContact() { //This function is in used so dont't delete this
        setTimeout(function(){
            contactModal.style.opacity = "100%";
        },250);
        setTimeout(function(){
            contactModal.style.display = "block";
        }, 0);
    }

    function closeContact() { //This function is in used so dont't delete this
        form.reset();
        contactModal.style.opacity = "0%";
        setTimeout(function(){
            contactModal.style.display = "none";
        }, 250);
    }

//Thank you after form submit
    var contact = document.querySelector( ".contact" );
    var thankyouModal = document.querySelector( ".thankyou" );
    var submitBtn = document.querySelector( ".submit-btn" );

    form.onsubmit = function() {                                    //On Submit Function
        form.reset();
        contact.style.display = "none";
        thankyouModal.style.display = "block";

        setTimeout(function(){
            contact.style.display = "block";
            thankyouModal.style.display = "none";
        }, 15000);
        
    }