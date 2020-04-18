/*  
    Змінні Типи Даних: http://fecore.net.ua/books/m5ph3r-javascript/module-01/vars-and-types.html   

    document.querySelector('#root') => Об'єктна модель документа, навігація по DOM (Documen Object Model):
    http://fecore.net.ua/books/m5ph3r-javascript/module-07/ 
*/

/*** 
 Знаходимо елемент в який будемо вставляти плитку з користувачів. Вибираємо по ідентифікатору 'root'
***/
let root = document.querySelector('#root');

/*
    Масиви: http://fecore.net.ua/books/m5ph3r-javascript/module-02/arrays.html
    Об'єкти: http://fecore.net.ua/books/m5ph3r-javascript/module-03/objects.html
 */

 /***
    Отримуємо колекцію даних із іменами, фаміліями, хоббі та аватарками користувачів.  
    Кожен окремий користувач зберігається в об'єкті. Об'єкти зберігаються в массиві.

 ***/
let user_info = [
    {
    firstName: "Stas",
    secondName: "Kondratiuk",
    iconUrl:"https://img.icons8.com/material/4ac144/256/user-male.png",
    hobby: "videogames"
   },
   {
      firstName:"Yura",
      secondName:"Fedunka",
      iconUrl:"https://img.icons8.com/material/4ac144/256/user-male.png",
      hobby:'videogames'
  },
  {
      firstName: "Oleh",
      secondName: "Musurivskyi",
      iconUrl: "https://img.icons8.com/material/4ac144/256/user-male.png",
      hobby: "Rubik's cube"
  },
  {
      firstName:"Max",
      SecondName: "Dorosh",
      iconUrl:"https://img.icons8.com/material/4ac144/256/user-male.png",
      hobby:"VideoGames"
  },
  {
      firstName:'Rostuk',
      secondName:'Manzel',
      iconUrl:"https://img.icons8.com/material/4ac144/256/user-male.png",
      hobby:'VideoGames'
  
  },
  {
  firstName:"robert",
  secondName:"levin",
  iconUrl:"https://img.icons8.com/material/4ac144/256/user-male.png",
  hobby:'videogames'
  },
  {
      firstName:"MAx",
      secondName:"LOLkek",
      iconUrl:"https://img.icons8.com/material/4ac144/256/user-male.png",
      hobby:'Game'
  },
  {
      firstName: "Taras",
      secondName: "Chepkyi",
      iconUrl:"https://img.icons8.com/material/4ac144/256/user-male.png",
      hobby: "parckur"
  },
  {
  firstName: "Anastasia",
      secondName: "Ilkiv",
      iconUrl: "https://img.icons8.com/material/4ac144/256/user-male.png",
      hobby: "make video"
   },
  {
      firstName: 'Taras',
      secondName: 'ak-KARAS',
      iconUrl: "https://img.icons8.com/material/4ac144/256/user-male.png",
      hobby: 'Rubiks Cube'
  }
];

/*
    Функції: http://fecore.net.ua/books/m5ph3r-javascript/module-02/functions.html
    Функція, яка викликає сама себе: https://www.codehint.ru/articles/2014-07-27_javascript-self-invoking-functions
 */

 /***
    Сворюємо функцію із аргументом "user_info" в який будемо приймати колекцію даних.
  ***/
(function displayUsers(userCollection){

 /*
    Цикли: http://fecore.net.ua/books/m5ph3r-javascript/module-01/loops.html
 */   

 /***
    Створюємо класичний цикл for. 'let i' - ітератор, лічильник скільки разів повторюється цикл.
    'i < userCollection.length' умова для виходу з цикла, щоб не був безкінечним. Виходимо з цикла, щойно кількість повторювань цикла стане рівна довжині масива (дивіться arr.langth())
  ***/
    for(let i = 0; i < userCollection.length; i++){

 /*
        Шаблонні строки: http://fecore.net.ua/books/m5ph3r-javascript/module-01/strings.html  |4 розділ.
        Створення HTML вузлів: http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-manipulation.html   |розділ 2.1, 3
*/


/***
     Записуємо шаблон в змінну, щоб мати змогу його використовувати при кожному повторенні цикла
     Підставляємо зімість статичного посилання/тексту за допомогою щаблоннтх строк пыдставляэмо посилання на дані користувачів які нам приходять в аргумент 'userCollection'
 ***/
        let userTemplate = `<div class = 'user-info'>
                            <img src='${userCollection[i].iconUrl}' alt='image'>
                            <span>${userCollection[i].firstName}, ${userCollection[i].secondName}</span>
                            <span>${userCollection[i].hobby}</span>
                            </div>`;
/*
        Додавання елементів у HTML: http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-manipulation.html | 3 розділ
*/

/***
        Вставляємо шаблон userTemplate у елемент котрий вище шукали по ідентифікатору `root`. 
        insertAdjacentHTML() - метод котрий приймає в себе 2 параметра:
            1) Позицію куди вставляти шаблон. Які варіанти строки можна туди передати можна знайти за посиланням у 3 розділі.
            2) Строку із html кодом.
 ***/
        root.insertAdjacentHTML('beforeend', userTemplate);

    }

 /***
    Функція сама себе викликає, щоб користувачі з'явились на сторінці щойно завантажиться сторінка.
 ***/   
})(user_info)



/***************  ДОМАШКА  ****************/

/**Модуль 2:
    Теорія (якщо є потреба).
    Задачі: https://app.schoology.com/course/2279747249/materials?f=194516837
   Модуль 3:
    Теорія (якщо є потреба).
    Задачі: https://app.schoology.com/course/2279747249/materials?f=194516842 
  **/


  /******* Наступного разу буду перевіряти всі домашки і ту що була на останнє заняття, тобтот із модуля 1 *******/