
function theBeatlesPlay(musicians,instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + (instruments[i]))
  }
  return array
}

function johnLennonFacts(facts) {
  var array = []
  var x = facts.length
  while (x > 0){
    x = x - 1
    var y = '!!!'
    array.unshift(facts[x] + y)
  }
  return array
}
