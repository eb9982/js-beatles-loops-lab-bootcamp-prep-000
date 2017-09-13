
function theBeatlesPlay(musicians,instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + (instruments[i]))
  }
  return array
}

function johnLennonFacts(facts) {
  var x = facts.length
  while (x > 0){
    var y = '!!!'
    x = x-1
    return facts[x] + y
  }
}
