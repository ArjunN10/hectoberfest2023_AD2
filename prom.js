console.log("1.third umpire review requested")

var displayEle=document.getElementById("dispEle")
var Timeout=5000
var umpireDescision

function getThirdUmpireResults(){
console.log("2.third umpire review started")
console.log("3.third umpire checking cameras")


return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        umpireDescision="out"
        console.log(`4.third umpire final result is ${umpireDescision}`)
    },Timeout)
    
})



}


function displayUmpireResult(){
    console.log(`5.Ready to show umpire results in ground screen ${umpireDescision}`)
    displayEle.innerText=umpireDescision

}

function firstUmpireResult(){
    console.log(`hey,ground upire please change your Descision`)
}

getThirdUmpireResults(function() {
    
})


