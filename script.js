function checklogin(email,password){
    console.log(email,password);
    for (let i = 0;i<userlist.length;i++){
        console.log(userlist[i])
        if (userlist[i].email == email && userlist[i].password == password){
            console.log("hi");
            document.location.href = "index.html";
        }
    }
    return false;// print invalid username here
}

let userlist = [];
function user(email,password){
    this.email = email;
    this.password = password;
    userlist.push(this);
}
let name = new user("something","something")