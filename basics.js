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