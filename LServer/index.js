const button = document.getElementById('addButton')

button.addEventListener('click', function () {
  const paragraph = document.createElement('p') // Create <p> element
  const text = document.createTextNode('This is a student') // Create text node
  paragraph.appendChild(text) // Append the text to <p>
  const studentList = document.getElementById('studentList')
  studentList.appendChild(paragraph) // Append <p> to <body>
}, false)

const button1 = document.getElementById('myButton')

button1.addEventListener('click', function () {
  const headerElement = document.getElementById('heading')
  headerElement.innerHTML = 'My New Heading'
}, false)
