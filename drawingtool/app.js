window.addEventListener("load", () => {
    if (window.innerWidth <= 500){
        document.body.innerHTML = "This app is not optimised for small screens";
    } else {
    const cursor = document.getElementById("cursor");
    const tools = document.getElementById("tools");
    const colorbox = document.getElementById("color");
    const pensize = document.getElementById("size");
    const erase = document.getElementById("erase");
    var color;
    const clear = document.getElementById("clear");
    const canvas = document.getElementById("canvasd");
    const ctx = canvas.getContext("2d");
    const canvasback = document.getElementById("back-col");
    canvasback.value = "#ffffff";
    canvas.height = window.innerHeight/1.2;
    canvas.width = window.innerWidth;
    tools.style.height = window.innerHeight - canvas.height;
    tools.style.width = "100%";

    let painting = false;
    
    function startposition(e) {
        painting = true;
        draw(e);
    }
    function endposition() {
        painting = false;
        ctx.beginPath();
    }
    function getcolor(){
        if (erase.classList.contains("on")){
            var color = canvasback.value;
        } else {
            var color = colorbox.value;
        }
        return color;
    }
    function eraser() {
        if(this.classList.contains("off")){
            this.classList.remove("off");
            this.classList.add("on");
        } else {
            this.classList.remove("on");
            this.classList.add("off");
        }
    }
    function getsize() {
        var size = pensize.value;
        if (size > 100){
            size = 100;
        } else if(size < 1){
            size = 1;
        }
        return size;
    }
    function draw(e){
        if(!painting) return;
        ctx.lineWidth = getsize();
        ctx.lineCap = "round"; 
        ctx.strokeStyle = getcolor();
        ctx.lineTo(e.clientX , e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX,e.clientY);
    }
    function cursorchange(e){
        cursor.style.background = getcolor();
        cursor.style.width = getsize() + "px";
        cursor.style.height = getsize() + "px";
        cursor.style.top = e.pageY + "px";
        cursor.style.left = e.pageX + "px";
    }
    function checkcursor(){
        canvas.addEventListener("mouseover" , ()=>{
            cursor.style.opacity = 1;
        })
        canvas.addEventListener("mouseout" , () =>{
            cursor.style.opacity = 0;
        })
        if(erase.classList.contains("on")){
            cursor.classList.add("eraser-cursor");
        } else {
            cursor.classList.remove("eraser-cursor");
        }
    }
    canvas.addEventListener("mousedown" , startposition);
    canvas.addEventListener("mouseup" , endposition);
    canvas.addEventListener("mousemove" , draw);
    erase.addEventListener("click" , eraser);
    window.addEventListener("mousemove" , cursorchange);
    clear.addEventListener("click" ,  () =>{
        ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    })
    setInterval(checkcursor , 1);
    setInterval(()=>{
        canvas.style.background = canvasback.value;
    } ,1);
 };
});