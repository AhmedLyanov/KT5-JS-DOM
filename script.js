function OpenCardRedactor(NextButton) {
    const topicElement = document.getElementById('CreaterCard');
    topicElement.scrollIntoView({ behavior: 'smooth' });
  }



function SetDesign1() {
  document.getElementById('DefaultDesign').src = 'СardDefault.png'
  document.getElementById('SaveDesign').src = 'СardDefault.png'
}

function SetDesign2() {
  document.getElementById('DefaultDesign').src = 'design1.png'
  document.getElementById('SaveDesign').src = 'design1.png'
}


function SetDesign3() {
  document.getElementById('DefaultDesign').src = 'design2.png'
  document.getElementById('SaveDesign').src = 'design2.png'
}



function SetDesign4() {
  document.getElementById('DefaultDesign').src = 'design3.png'
  document.getElementById('SaveDesign').src = 'design3.png'
  
}










const russianLetters = {
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'g',
  д: 'd',
  е: 'e',
  ё: 'yo',
  ж: 'zh',
  з: 'z',
  и: 'i',
  й: 'y',
  к: 'k',
  л: 'l',
  м: 'm',
  н: 'n',
  о: 'o',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ф: 'f',
  х: 'h',
  ц: 'ts',
  ч: 'ch',
  ш: 'sh',
  щ: 'sch',
  ъ: '',
  ы: 'y',
  ь: '',
  э: 'e',
  ю: 'yu',
  я: 'ya',
};

const inputName = document.getElementById('NameInfo');
const inputNameCreator = document.getElementById('InputNameCard');

inputName.addEventListener('input', function() {
  const text = inputName.value.toLowerCase();
  let result = '';

  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    const translation = russianLetters[letter] || letter;
    result += translation;
  }

  inputNameCreator.value = result;
});






let inputNumber = document.getElementById("Number");
let inputNumberCreator = document.getElementById("InputNumberCard");

// Вешаем обработчик события на изменение значения первого input
inputNumber.addEventListener("input", function() {
  // Записываем значение первого input во второй input
  inputNumberCreator.value = inputNumber.value;
});





const input1 = document.getElementById("Number");
const input2 = document.getElementById("InputNumberCard");

input1.addEventListener("input", function() {
  const value = input1.value;
  const formattedValue = formatInput(value);
  input2.value = formattedValue;
});

function formatInput(value) {
  
  const digitsOnly = value.replace(/\D/g, "");

  
  if (digitsOnly.length <= 16) {
   
    let formattedValue = "";
    for (let i = 0; i < digitsOnly.length; i++) {
      formattedValue += digitsOnly[i];
      if ((i + 1) % 4 === 0 && i !== digitsOnly.length - 1) {
        formattedValue += " ";
      }
    }
    return formattedValue;
  } else {
    return "Превышена допустимая длина ввода.";
  }
}




function SetLogo(){
  document.getElementById('LogoOperators').src = 'mir.png'
}




function SetLogo2(){
  document.getElementById('LogoOperators').src = 'mc.png'
}



function SetLogo3(){
  document.getElementById('LogoOperators').src = 'Visa-Logo.png'
}


function SetLogo4(){
  document.getElementById('LogoOperators').src = 'PayPal.png'
}


function SetLogo5(){
  document.getElementById('LogoOperators').src = 'Qiwi_Logo.png'
}



