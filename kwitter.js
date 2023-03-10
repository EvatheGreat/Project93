function login()  {
    coconutwater=document.getElementById("input").value;
    localStorage.setItem("Username: ",coconutwater);
    window.location="kwitter_room.html";
}