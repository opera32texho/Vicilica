//Создаем массив со словами
let words = [
    
    "макака",
    "прекрасынй",
    "оладушек",
    "мороженное",
    "колесо",
    "стручёк"
];
// выбираем случайное слово 
let word = words[Math.floor(Math.random() * words.length)];

//Создаем итоговый массив
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = " _ ";
}

let remainingLetters = word.length;
let endGame = word.length + 2;

//Итоговый цикл
while (remainingLetters > 0 && endGame > 0) {
    // Основной код
    alert(answerArray.join(" "));
    
    let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите только одну букву.");        
    
    } else {
        guess = guess.toLowerCase();
        for (let j = 0; j < word.length; j++)
            if(answerArray[j]=== guess){
                alert("Эта буква уже есть, введите другую");
                break;
            }
            else if (word[j] === guess) {
                answerArray[j] = guess;
            
               
                remainingLetters--;
            }

            
    }
    endGame--;
    // Обновляем состояние игры 
}


    // вхождения угаданной буквы 
if(endGame > 0)   {
    alert(answerArray.join(" "));
    alert("Отлично! Было загадано слово " + word);

}else{
    alert("Извини , но ты проиграл");
}