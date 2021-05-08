//hamb
function hamburger(){
    let hamb = document.querySelector(".hamburger").style.display
    if(hamb === ""){
        let coord_hamb = 0
        document.querySelector(".hamb_stick img").src = "../../Source/Img/menu_open.svg"
        document.querySelector(".hamburger").style.display = "block"
        let hamb_open=setInterval(function(){
            if(coord_hamb < 210){
                coord_hamb+=10
                document.querySelector(".hamburger").style.height = coord_hamb +"px"
            }
        },1)
        setTimeout(()=> clearInterval(hamb_open),150)
    }else{
        let coord_hamb = 210
        document.querySelector(".hamb_stick img").src = "../../Source/Img/menu.svg"
        let hamb_open=setInterval(function(){
            if(coord_hamb > 0){
                coord_hamb-=10
                document.querySelector(".hamburger").style.height = coord_hamb +"px"
            }else{
                document.querySelector(".hamburger").style.display = ""
            }
        },1)
        setTimeout(()=> clearInterval(hamb_open),150)
    }
}

document.onclick = function() {//закрытия гамбургера нажатием в любое место
    if(event.target.className != "hamb_stick" && event.target.className != "sticks_hamb"){
        let coord_hamb = 210
        let hamb_open=setInterval(function(){
            if(coord_hamb > 0){
                coord_hamb-=10
                document.querySelector(".hamburger").style.height = coord_hamb +"px"
            }else{
                document.querySelector(".hamburger").style.display = ""
            }
        },1)
        setTimeout(()=> clearInterval(hamb_open),150)
    }
}


//playing video
let video_condition = 0
document.onclick = function() {
    if(event.target.className === "intro_video"){
        if(video_condition % 2 === 0){
            document.querySelector(".intro_video").play()
        }else{
            document.querySelector(".intro_video").pause()
        }
        video_condition++
    }
}