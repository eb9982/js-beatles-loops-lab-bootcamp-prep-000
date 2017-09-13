function theBeatlesPlay(musicians,instruments) {
  for (var i = 0; i < musicians.length; i++) {
    var array = []
    array.push(musicians[i] + 'plays ' + (instruments[i]))
    return array
  }
}
