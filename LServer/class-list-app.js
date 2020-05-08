
const electiveOne = { courseCode: 'ELEN4010', yearOffered: 4 }
const electiveTwo = { courseCode: 'ELEN4001', yearOffered: 4 }
const electiveThree = { courseCode: 'ELEN4020', yearOffered: 4 }
const electiveFour = { courseCode: 'ELEN4017', yearOffered: 4 }
const students = [{
  name: 'Kwezi',
  studentNumber: 453528,
  yearOfStudy: 4,
  electives: [electiveOne, electiveTwo, electiveThree]
},
{
  name: 'Pieter',
  studentNumber: 454345,
  yearOfStudy: 3,
  electives: [electiveOne, electiveTwo, electiveFour]
},
{
  name: 'Jade',
  studentNumber: 678345,
  yearOfStudy: 4,
  electives: [electiveTwo, electiveThree, electiveFour]
},
{
  name: 'Kiren',
  studentNumber: 567893,
  yearOfStudy: 4,
  electives: [electiveOne, electiveTwo, electiveThree]
}]

var isFourth = x => x.yearOfStudy === 4
var isELEN4010 = x => x.courseCode === 'ELEN4010'

const ELEN4010Students = students.filter(isFourth)
  .filter(s => s.electives.find(isELEN4010))

document.querySelector('#search-text').addEventListener('input', function () {
  var filterOptns = document.getElementById('filterBy')
  var filterOptn = filterOptns.options[filterOptns.selectedIndex].value

  var stext = document.getElementById('search-text').value
  var studentsdiv = document.getElementById('students')
  studentsdiv.innerHTML = ''
  var studentlist = []
  if (filterOptn === 'name') {
    studentlist = students.filter(x => x.name.toLowerCase().includes(stext.toLowerCase()))
  }
  if (filterOptn === 'studentNo') {
    studentlist = students.filter(x => x.studentNumber.toString().includes(stext))
  }
  if (filterOptn === 'yearOfStudy') {
    studentlist = students.filter(x => x.yearOfStudy.toString().includes(stext))
  }
  if (filterOptn === 'coursecode') {
    studentlist = students.filter(x => x.electives.find(y => y.courseCode.toLowerCase().includes(stext.toLowerCase())))
  }

  studentlist.forEach(element => {
    var p = document.createElement('p')
    var t = document.createTextNode(element.name)
    p.appendChild(t)
    studentsdiv.appendChild(p)
  })

  // alert('NOOOOOOOOO')
  // DO SOMETHING
})
// =================================================
// This was a Copy and paste situation
function setCookie (cname, cvalue, exdays) {
  var d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  var expires = 'expires=' + d.toGMTString()
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

function getCookie (cname) {
  var name = cname + '='
  var decodedCookie = decodeURIComponent(document.cookie)
  var ca = decodedCookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

function checkCookie () {
  var user = getCookie('username')
  if (user !== '') {
    alert('Welcome again ' + user)
  } else {
    user = prompt('Please enter your name:', '')
    if (user !== '' && user !== null) {
      setCookie('username', user, 249)
    }
  }
}
