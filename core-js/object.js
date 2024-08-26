var user1 = {

        name:"gokul",
        Age:21,
        Language:"Java",
        fnc:{
            fc:()=>{
                console.log(this.name + "Using Object Function Call")
            }
        }
}
//dot Notation
console.log(user1);
//new n=Notation
var user2 = new Object();
user2.name = "gokul";
user2.age = 22;
console.log(user2);

//square notation

console.log(user1['name'])
console.log(typeof document)

