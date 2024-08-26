var a = "ADOBECODEBANC"
var b = "ABC"
var max = 0,currntMax=0
var sub,currntSub;
var flag=1
for(var i=0;i<a.length;i++){
    for(var j=0;j<a.length;j++)
        {
            var currntSub = a.substring(i,j)
            if(currntSub.includes(b)){
                if(flag==1){
                    sub = currntSub
                    max = sub.length
                    flag=0
                    continue
                }   
                currntMax = currntSub.length
                if(currntMax<Max){
                    sub = currntSub
                    Max = currntMax
                }
            }
        }
}
console.log(sub)
