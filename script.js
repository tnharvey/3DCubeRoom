window.onload = function(){
    var cube = document.querySelector('.scene');
    document.addEventListener('keydown', event => {
        if(event.key === "ArrowLeft") {
            if (cube.classList.contains("face-right")) {
                cube.classList.remove("face-right");
                cube.classList.add("face-front");
            }
            else if (cube.classList.contains("face-front")) {
                cube.classList.remove("face-front");
                cube.classList.add("face-left");
            }
        }
        if (event.key === "ArrowRight") {
            if (cube.classList.contains("face-left")) {
                cube.classList.remove("face-left");
                cube.classList.add("face-front");
            }
            else if (cube.classList.contains("face-front")) {
                cube.classList.remove("face-front");
                cube.classList.add("face-right");
            }
        }
        if (event.key === "h") {
            if (cube.classList.contains("show")) {
                cube.classList.remove("show");
                cube.classList.add("hide");
            }
            else if (cube.classList.contains("hide")) {
                cube.classList.remove("hide");
                cube.classList.add("show");
            }
        }
        if(event.key === "ArrowUp") {
            if (cube.classList.contains("face-front")) {
                cube.classList.remove("face-front");
                cube.classList.add("face-front-table");
            }
            else if (cube.classList.contains("face-left")) {
                cube.classList.remove("face-left");
                cube.classList.add("face-left-table");
            }
            else if (cube.classList.contains("face-right")) {
                cube.classList.remove("face-right");
                cube.classList.add("face-right-table");
            }
        }
        if(event.key === "ArrowDown") {
            if (cube.classList.contains("face-front-table")) {
                cube.classList.remove("face-front-table");
                cube.classList.add("face-front");
            }
            else if (cube.classList.contains("face-left-table")) {
                cube.classList.remove("face-left-table");
                cube.classList.add("face-left");
            }
            else if (cube.classList.contains("face-right-table")) {
                cube.classList.remove("face-right-table");
                cube.classList.add("face-right");
            }
        }
        if(event.key === "Enter") {
            if(document.getElementById('popupB').style.visibility === "visible")
            popupBClick();
        }
    });
}

function wallClick () {
    document.getElementById("popupA").style.visibility="visible";
}

function popupAClick () {
    document.getElementById("popupA").style.visibility="hidden";
}

function tableClick () {
    document.getElementById("popupB").style.visibility="visible";
    document.getElementById("popupB").addEventListener('click',popupBClick);
}

function popupBClick () {
    document.getElementById("popupB").style.visibility="hidden";
    document.getElementById("popupB").removeEventListener('click',popupBClick);
}
