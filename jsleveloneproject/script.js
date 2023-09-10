var FirstName=prompt('please enter your first name')
var LastName = prompt('please enter your last name')
alert('hello' + FirstName + ' '+LastName)
var Age = prompt('please enter your age')
var Height = prompt('please enter your height in cm')
var PetName = prompt("enter your pet name:")

if ( (FirstName[0]===LastName[0]) &&  (20<Age<30) && (Height>=170) && (PetName[-1]==='y') ) {
    console.log("you got acces to read the secret message")

}
