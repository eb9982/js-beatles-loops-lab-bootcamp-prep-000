
function theBeatlesPlay(musicians,instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + (instruments[i]))
  }
  return array
}

function johnLennonFacts(facts) {
  var array = []
  var x = facts.length - 1
  while (x > 0){
    var y = '!!!'
    array.push(facts[x] + y)
    x = x-1
  }
  return array
}
