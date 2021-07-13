function fun()
{
    var ele=document.querySelector("#main");
    var btn=document.querySelector("#Myb");
    var dd=document.querySelector("#d");
    btn.addEventListener("mouseover",function(){
           dd.style.display="block";
    });
    window.addEventListener("mouseover",function(event){
           if(event.target==ele)
           {
              dd.style.display="none";
           }
    })
}