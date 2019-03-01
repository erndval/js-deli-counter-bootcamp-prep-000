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
  
}