function myFunction(){
    let num;
    num=document.getElementById("num").value;
    console.log(num);
    window.open("https://www.pixiv.net/users/"+num);
}

var input = document.getElementById("num");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("bt").click();
  }
});