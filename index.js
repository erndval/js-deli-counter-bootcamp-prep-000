function takeANumber (line, name) {
  return `Welcome ${name}. You are number ${line.length+1} in line.`
}

function nowServing (line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
  var currentlyServing = line[0]
  line.shift()
  return currentlyServing
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    neatList = []
    for (var i = 0; i < line.length; i++) {
      neatList = ["i]
    }
    return `The line is currently: ${[neatList]}`
  }
}