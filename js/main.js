const oldgreeting = require("./oldgreeting.js");
console.log("merge oefening leuk!")

oldgreeting.greet()


function basicHaiku()
{
    return ["Toward those short trees","khaledd ","On a day in spring."]
}
//zet hier je haiku functie neer, zie https://github.com/progsen/haikugitopdracht voor ideeen

haikus = [
    basicHaiku()
]

function randomHaiku()
{

    let i = Math.floor(Math.random(haikus.length));
    return haikus[i];
}

function start()
{
    console.log("starting main")
    
    console.log(randomHaiku())

}

function student2Haiku()
{
    console.log("haiku by:","Docent");
    console.log("Panda in the mist");
    console.log("Gently chewing on bamboo");
    console.log("Perfect breakfast time,");
}
student2Haiku()

start()