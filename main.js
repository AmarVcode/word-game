

function check(){
    let div=document.getElementsByClassName("input")
    
    let box=document.getElementById("box");
    box.innerHTML=null
    for(i=0;i<div.length;i++){
        console.log(div[i].value)
        if(div[i].value==div[i].name){
            let d=document.createElement("div");
            d.setAttribute("class","right");
            a=i+1
            d.innerText=a+" Is Right Answer"
            box.append(d)
        }
        else{
            let d=document.createElement("div");
            d.setAttribute("class","wrong");
            a=i+1
            d.innerText=a+" Is Wrong Answer"
            box.append(d)
        }
    }
    window.scroll(10000,10000)
}