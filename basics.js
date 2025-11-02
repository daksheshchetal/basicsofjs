//defining variables

const character = 'dakshesh'
let levels = 4
let summary = `
characterName:${character}
levels:${levels}
`
console.log(summary)
if(levels===0){console.log(summary)}
else if(levels>5){console.log(summary)}
for (let i=0;i<5;i++){
    console.log("The number is:"+i)
    if(i===3){break}
}

function myFunctions(p1,p2){
    return p1+p2
}
sum=myFunctions(9,7)
console.log(sum)

let cars=["Mercedes-Benz","Rolls-Royce","BMW"]
console.log(cars[1])

const highScores=[
    {name:'Raptor',score:125,clan:'Alpha'},
    {name:'Zippy',score:85,clan:'Beta'}
]
highScores.forEach(
    data=>{
        console.log(`${
            data.name
        }`)
    }
)

const topScores=highScores.filter(player=>player.score>90)
console.log(topScores)

const topPlayerNames=topScores.map(player=>player.name)
console.log(topPlayerNames)

//Asynchronous intro
const delay=(ms)=>new Promise(resolve=>setTimeout(resolve,ms))
const runSequence=async()=>{
    console.log("Sequence is loading")
    await delay(2000)
    console.log("Waiting for server data")
    await delay(2500)
    console.log("Almost there")
    await delay(500)
    console.log("Data successfully loaded")
}
runSequence()
