const pElement= document.querySelectorAll(".fontp");
const plusbtn= document.querySelectorAll(".plus");
const minusbtn = document.querySelectorAll(".minus");
const reqem = document.querySelectorAll('.reqem');
const exText=document.querySelector(".header")
const textcolor=document.querySelector(".color")
const bgcolor=document.querySelector(".bgcolor")

function item(){
    fontsize= parseInt(getComputedStyle(exText).fontSize)
    borderrad= parseInt(getComputedStyle(exText).borderRadius)
    height= parseInt(getComputedStyle(exText).height)
    width= parseInt(getComputedStyle(exText).width)
    border= parseInt(getComputedStyle(exText).border)
}

for (let i=0; i<plusbtn.length ; i++){
    plusbtn[i].addEventListener("click", ()=> {
        x=parseInt(reqem[i].innerText)
        x=x+5
        reqem[i].innerText=x+"px"
        item()

        if(i==0){
            exText.style.fontSize=fontsize+ 5 +"px"
        }
        else if(i==1){
            exText.style.borderRadius= borderrad+ 5 +"px"
        }
        else if(i==2){
            exText.style.height= height+ 5 +"px"
        }
        else if(i==3){
            exText.style.width=width+ 5+ "px"
        }
        else{
            exText.style.border=border+5+"px dashed black"
        }
    })
    minusbtn[i].addEventListener("click", ()=> {
        x=parseInt(reqem[i].innerText)
        x=x-5
        reqem[i].innerText=x+"px"
        item()
        if(i==0){
            exText.style.fontSize=fontsize- 5 +"px"
        }
        else if(i==1){
            exText.style.borderRadius= borderrad- 5 +"px"
        }
        else if(i==2){
            exText.style.height= height- 5 +"px"
        }
        else if(i==3){
            exText.style.width=width- 5+ "px"
        }
        else{
            exText.style.border=border- 5+"px dashed black"
        }
    })
}

textcolor.addEventListener( "input", () => {
     exText.style.color = textcolor.value
})
bgcolor.addEventListener("input", () => {
    exText.style.background= bgcolor.value
})