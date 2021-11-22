
var form = document.getElementById('survey-form');
var button = document.getElementById('submit');
form.addEventListener('submit',function(event){
   event.preventDefault()//prevents the form from auto submitting

// ------------------------------------------------
// Choice Of Foods
const foods=document.getElementsByClassName("food_sel-wr");
const foodData=document.getElementById("choice of food-data");
let count=0;
[...foods[0].children].forEach((item)=>{
  //selected counts
  if(item.checked){
    count++
  }
})
// load foods in table
if(count>=2){
  let foodList=[];
  [...foods[0].children].forEach((item)=>{
    if(item.checked){
      console.log(item.value);
      foodList.push(item.value)
    }
  })
  // others
  let data6=document.createElement("td")
  data6.append(`${foodList}`)
  foodData.appendChild(data6)
  //var First_Name =document.getElementById("firstname").value
  var firstName = document.getElementById('first-name').value
  var data=document.createElement('td')
  data.append(firstName);
  var row1=document.getElementById('firstname-data')
 row1.appendChild(data)
 var lastName = document.getElementById('last-name').value
 var data2=document.createElement('td')
 data2.append(lastName);

var row2=document.getElementById('lastname-data')
row2.appendChild(data2)
var email = document.getElementById('email').value
 var em=document.createElement('td')
 em.append(email);

var row2=document.getElementById('email-data')
row2.appendChild(em)

var Address=document.getElementById("comments").value
console.log(Address);

var data3=document.createElement('td')
data3.append(Address);
var row3=document.getElementById('address-data')
row3.appendChild(data3)

var Pincode=document.getElementById("pincode").value
console.log(Pincode);

var data4=document.createElement('td')
data4.append(Pincode);
var row4=document.getElementById('pincode-data')
row4.appendChild(data4)
// gender//////
    var rate_value= document.querySelector('input[name = option]:checked').value;
console.log( rate_value)
var data5=document.createElement('td')
data5.append( rate_value);
var row5=document.getElementById('gender-data')
row5.append(data5)

///state
var State=document.getElementById("state").value
console.log(State);
var data7=document.createElement('td')
data7.append(State);
var row7=document.getElementById('state-data')
row7.appendChild(data7)


var Country=document.getElementById("country").value
console.log(Country);
var data8=document.createElement('td')
data8.append(Country);
var row8=document.getElementById('country-data')
row8.appendChild(data8)

}else{
  // alert to enter
  alert("please enter minimum 2 option")
  return false;
}
// ----------------------------------------------

  ///creating table
  var addData=document.createElement('td');

  var inputs=document.querySelectorAll('input[type=text]')
  var input_N=document.querySelector('input[type=number]')
      input_N.value=""
  inputs.forEach (input=>input.value='')
  var textarea=document.querySelectorAll('textarea')
  textarea.forEach (textarea=>textarea.value='')
  var radList = document.getElementsByName('option');

    for (var i = 0; i < radList.length; i++) {
      if(radList[i].checked) radList[i].checked = false;
    }
} )