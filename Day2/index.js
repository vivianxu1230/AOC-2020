let list=require('./list')
list=list.split('\n').map(elem=> elem.split(': ')).map(elem=> [elem[0].split(' '), elem[1]])
list=list.map(elem=> [elem[0][0].split('-'), elem[0][1], elem[1]])
list=list.filter(elem=> {
const idx1= Number(elem[0][0])-1
const idx2= Number(elem[0][1])-1
return (elem[2][idx1]===elem[1] && elem[2][idx2]!==elem[1]) || (elem[2][idx1]!==elem[1] && elem[2][idx2]===elem[1])
})

console.log(list.length)

