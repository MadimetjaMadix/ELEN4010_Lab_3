const button = document.getElementById('addButton')

button.addEventListener('click', function () {
  const paragraph = document.createElement('p') // Create <p> element
  const text = document.createTextNode('This is a student') // Create text node
  paragraph.appendChild(text) // Append the text to <p>
  document.body.appendChild(paragraph) // Append <p> to <body>
}, false)
