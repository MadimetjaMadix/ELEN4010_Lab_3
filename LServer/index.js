
const button1 = document.getElementById('S1Button')
const button2 = document.getElementById('S2Button')
const button3 = document.getElementById('S3Button')
const button4 = document.getElementById('S4Button')
const button5 = document.getElementById('S5Button')
const Dltbutton = document.getElementById('DeletList')

function updateElement (abutton, student) {
  var status = abutton.textContent
  var mytext = student.id + 'text'

  if (status === 'Edit') {
    var ebox = document.createElement('input')
    var details = student.textContent
    ebox.setAttribute('type', 'text')
    ebox.setAttribute('id', mytext)
    ebox.setAttribute('value', details)

    student.innerHTML = ''
    student.appendChild(ebox)
    abutton.innerHTML = 'Done'
  } else {
    var t = document.getElementById(mytext).value
    student.innerHTML = t
    abutton.innerHTML = 'Edit'
  }
}

button1.addEventListener('click', function () {
  var student = document.getElementById('student1')
  updateElement(button1, student)
}, false)

button2.addEventListener('click', function () {
  var student = document.getElementById('student2')
  updateElement(button2, student)
}, false)

button3.addEventListener('click', function () {
  var student = document.getElementById('student3')
  updateElement(button3, student)
}, false)

button4.addEventListener('click', function () {
  var student = document.getElementById('student4')
  updateElement(button4, student)
}, false)

button5.addEventListener('click', function () {
  var student = document.getElementById('student5')
  updateElement(button5, student)
}, false)

Dltbutton.addEventListener('click', function () {
  var studentlist = document.getElementById('studentList')
  studentlist.innerHTML = ''
}, false)
