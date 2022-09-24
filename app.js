//Misc Helpers
function randomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
function getKeyString(x, y) {
    return `${x}x${y}`;
  }
function createName() {
    const prefix = randomFromArray([
      "COOL",
      "SUPER",
      "HIP",
      "SMUG",
      "COOL",
      "SILKY",
      "GOOD",
      "SAFE",
      "DEAR",
      "DAMP",
      "WARM",
      "RICH",
      "LONG",
      "DARK",
      "SOFT",
      "BUFF",
      "DOPE",
    ]);
    const animal = randomFromArray([
      "BEAR",
      "DOG",
      "CAT",
      "FOX",
      "LAMB",
      "LION",
      "BOAR",
      "GOAT",
      "VOLE",
      "SEAL",
      "PUMA",
      "MULE",
      "BULL",
      "BIRD",
      "BUG",
    ]);
    return `${prefix} ${animal}`;
  }

 // Options for Player Colors... these are in the same order as our sprite sheet
const playerColors = ["blue", "red", "orange", "yellow", "green", "purple"];














(function () {

    let playerId;
    let playerRef;
    let players = {};
    let playerElements = {};
    let coins = {};
    let coinElements = {};

    const gameContainer = document.querySelector(".game-container");
    const playerNameInput = document.querySelector("#player-name");
    const playerColorButton = document.querySelector("#player-color");


    function initGame() {
      const allPlayersRef = firebase.database().ref(`players`);
      const allCoinsRef = firebase.database().ref(`coins`);

      allPlayersRef.on('value', (snapshot) => {
        //Fires whenever a change occurs
      })

      allPlayersRef.on('child_added', (snapshot) => {
        //Fires whenever a new node is added to the tree
        const addedPlayer = snapshot.val();
        const characterElement = document.createElement('div');
        characterElement.classList.add('Charecter', 'grid-cell');
        if (addedPlayer.id === playerId) {
          characterElement.classList.add('you');
        }
        characterElement.innerHTML = (`
        <div class="Character_shadow grid-cell"></div>
        <div class="Character_sprite grid-cell"></div>
        <div class="Character_name-container">
          <span class="Character_name"></span>
          <span class="Character_coins">0</span>
        </div>
        <div class="Character_you-arrow"></div>
        `);
        playerElements[addedPlayer.id] = characterElement;

        //Fill initial state
        characterElement.querySelector('.Character_name').innerText = addedPlayer.name;
        characterElement.querySelector('.Character_coins').innerText = addedPlayer.coins;
        characterElement.setAttribute('data-color', addedPlayer.color);
        characterElement.setAttribute('data-direction', addedPlayer.direction);
        const left = 16 * addedPlayer.x + 'px';
        const top = 16 * addedPlayer.y - 4 + 'px';
        characterElement.style.transform = `translate3d(${left}, ${top}, 0)`;

      })
    }

    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        //You're logged in!
        playerId = user.uid;
        playerRef = firebase.database().ref(`players/${playerId}`);
  
        const name = createName();
        playerNameInput.value = name;
  
        const {x, y} = getRandomSafeSpot();
  
  
        playerRef.set({
          id: playerId,
          name,
          direction: "right",
          color: randomFromArray(playerColors),
          x,
          y,
          coins: 0,
        })
  
        //Remove me from Firebase when I diconnect
        playerRef.onDisconnect().remove();
  
        //Begin the game now that we are signed in
        initGame();
      } else {
        //You're logged out.
      }
    })
    


    firebase.auth().signInAnonymously().catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage);
    })
  } 
  );

