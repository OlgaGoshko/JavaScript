
// function writeNumber (запис номеру телефону в книгу)
// function deleteNumber (видалення номеру з книги)
// function getNumber (отримати номер телефону за вказаним ім'ям)

const phoneNumber = {
   // ім'я: телефон
   'Настя': '+38093984598',
   'Богдан': '+3809035293',
   'Ігор': '+3803592354',
   'Наталя': '+380359223575',
   'Максим': '+3803595588',
}

function writeNumber(contact, el){
   phoneNumber['Катя'] = el
}
writeNumber(phoneNumber, '+380965823254')


function deleteNumber(contact, nameNumber){
   delete phoneNumber[nameNumber]
}
deleteNumber(phoneNumber, 'Ігор')


function getNumber(){
   console.log(phoneNumber.Максим)
}
getNumber()

console.log(phoneNumber)


// Ось так мені чомусь не працює, не розумію чому:

// function getNumber(nameNumber){
//    phoneNumber.nameNumber
// }
// console.log(getNumber('Богдан'))


