
let root = document.querySelector('#root');

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

(function displayUsers( userCollection ){

    for( let i = 0; i < userCollection.length; i++ ){

        let userTemplate = `<div class = 'user-info'>
                            <img src='${userCollection[i].iconUrl}' alt='image'>
                            <span>${userCollection[i].firstName}, ${userCollection[i].secondName}</span>
                            <span>${userCollection[i].hobby}</span>
                            </div>`;

        root.insertAdjacentHTML( 'beforeend', userTemplate );

    }

})( user_info )

