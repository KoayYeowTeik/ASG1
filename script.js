function checklogin(email,password){
    for (let i = 0;i<userlist.length;i++){
        if (userlist[i].email == email && userlist[i].password == password){
            console.log("hi");
            document.location.href = "index.html";
        }
    }
    console.log("hi")
    return false;// print invalid username here
}

let userlist = [];
function user(email,password){
    this.email = email;
    this.password = password;
    userlist.push(this);
}
let name = new user("something","something")
var input = document.getElementById("searchbar");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    alert("add search details")
  }
});