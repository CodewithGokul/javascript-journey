

 function netFlixHome(){

        return new Promise((resolve)=>{
                setTimeout(() => {

                    console.log("Home Page Displayed!!")
                }, 1000)
                resolve()
            }
        )
}

 function netFlixMovie(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
                console.log("Movie Choosed")
        },1000)
        resolve()

    }
    )

}

function netflixWatched(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
                console.log("Movie Watched")
        },1000)
        resolve()
    }
    )
}


//  function display(){
//    netFlixHome().then(netFlixMovie().then(netflixWatched))
// }



display()