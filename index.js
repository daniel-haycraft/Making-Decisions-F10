backpack = []
backpack.push('sword')
backpack.push('shield')
backpack.push('food')

backpack.splice(0,1)

let furCoat = 'fur coat'

backpack.push(furCoat)

let warmJon = backpack.pop()
let itemCount = backpack.length
backpack.push('flint', 'blankey', 'knife', 'toothbrush')

let backpack2 = backpack.splice(3,3)

//console.log(backpack,backpack2)

//console.log(backpack[0])
for (let i = 0; i < backpack.length; i++){
  console.log(backpack[i])
}














