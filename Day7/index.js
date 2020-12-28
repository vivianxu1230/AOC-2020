list=`light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`.split('.\n').map(e=> e.split(' contain ')).reduce(function(accum, elem) {
  if (!elem[1].includes('no')) {
    accum[elem[0]]=elem[1].split(',')
  } else {
    accum[elem[0]]=[]
  }
  return accum
}, {})

//visited stack
//base: if the key has 0 length, do not increment and mark key as visited
//if key has length, check if value includes gold bag. if so, increment counter and mark key as visited. if it does not include, recurse
let counter=0;
let visited={};
function lookAtKey(k, listy) {
  if (!visited[k]) {
    if (!listy[k]) {
      console.log('hi')
    } else {
      let filtered=listy[k].filter(e=> e.includes('shiny gold bag'))
      if (filtered.length>0) {
        counter++;
        visited[k]=true;
      } else {
         listy[k].forEach(el=> {
          if (!visited[el]) {
            lookAtKey(el, listy)
          }
        })
      }
    }
  }
}


function findBags(listObj) {
  for (let key in listObj) {
    lookAtKey(key, listObj)
  }
  return counter;
}
console.log(list)
findBags(list)