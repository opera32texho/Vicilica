
// word: загаданное слово
let word = pickWord();
// answerArray: итоговый массив
var answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угадать
let remainingLetters = word.length;
let endGame = word.length + 2;
while (remainingLetters > 0 && endGame > 0) {
    showPlayerProgress(answerArray);
    // guess: ответ игрока
    var guess = getGuess();
    if (guess === null) {
    break;
    } else if (guess.length !== 1) {
    alert("Пожалуйста, введите одиночную букву.");
    } else {
    // correctGuesses: количество открытых букв
    var correctGuesses = updateGameState(guess, word,answerArray);
    remainingLetters -= correctGuesses;
    }
    endGame--;
    }
    showAnswerAndCongratulatePlayer(answerArray);
    function pickWord () {
        let words = [
    
        "мак"
        // "прекрасынй",
        // "оладушек",
        // "мороженное",
        // "колесо",
        // "стручёк"
    ];
   return words[Math.floor(Math.random() * words.length)];
    

   }
    function setupAnswerArray (word) {
    // Возвращает итоговый массив для заданного слова word
    let answerArray = [];
    for (let i = 0; i < word.length; i++) {
    answerArray[i] = " _ ";
    }

    return answerArray;
   }
    function showPlayerProgress (answerArray) {
    // С помощью alert отображает текущее состояние игры
    alert(answerArray.join(" "));
   }
    function getGuess () {
    // Запрашивает ответ игрока с помощью prompt
    let result = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
    return result;
   }
    function updateGameState (guess, word, answerArray) {
    // Обновляет answerArray согласно ответу игрока (guess)
    // возвращает число, обозначающее, сколько раз буква guess
    // встречается в слове, чтобы можно было обновить значение
    // remainingLetters
        let howManyGuessInWord = 0;
        guess = guess.toLowerCase();
        for (let j = 0; j < word.length; j++)
            if(answerArray[j]=== guess){
                alert("Эта буква уже есть, введите другую");
                break;
            }
            else if (word[j] === guess) {
                howManyGuessInWord++;
                answerArray[j] = guess;
               
            }
            
           return howManyGuessInWord;
    }
     function showAnswerAndCongratulatePlayer (answerArray) {
    // С помощью alert показывает игроку отгаданное слово
    // и поздравляет его с победой
   
       
      if(endGame > 0){
        alert(answerArray.join(" "));
        alert("Отлично! Было загадано слово " + word);
      
    
    }else{
        alert("Извини , но ты проиграл");
    }
   }