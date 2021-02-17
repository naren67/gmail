function sub(){

var ul = document.getElementById('data');
var name = document.getElementById('firstName')
var mail = document.getElementById('email')
var message = document.getElementById('message')
var list1 = document.createElement('li');
list1.setAttribute('id','name-data');
list1.appendChild(document.createTextNode(name.value));


var list2 = document.createElement('li');
list2.setAttribute('id','mail-data');
list2.appendChild(document.createTextNode(mail.value));


var list2 = document.createElement('li');
list2.setAttribute('id','message-data');
list2.appendChild(document.createTextNode(message.value));
ul.append(list1,list2,list3);






}