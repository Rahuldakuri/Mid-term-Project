const game = {
    start: {
        text: "You stand before a grand, imposing mansion. A storm rages, and the only light comes from the mansion's windows. Will you enter?",
        image:"images/start.jpg",
        choices: [
            { text: "Enter the Mansion", consequence: "lobby" },
            { text: "Turn Back", consequence: "fear" }
        ]
    },
    lobby: {
        text: "The lobby is dimly lit, with a grand staircase and shadowed corners. You hear a noise from the garden. Do you investigate?",
        image:"images/lobby.jpg",
        choices: [
            { text: "Go to the Garden", consequence: "garden" },
            { text: "Go Upstairs", consequence: "upper" }
        ]
    },
    garden: {
        text: "The garden is overgrown and eerie. You find an old fountain. Do you search it?",
        image:"images/garden.jpg",
        choices: [
            { text: "Search the Fountain", consequence: "fountain" },
            { text: "Return to the Lobby", consequence: "lobby" }
        ]
    },
    upper: {
        text: "You reach an upper corridor. Doors line the walls. One door is slightly ajar.",
        image:"images/upper.jpg",
        choices: [
            { text: "Enter the Ajar Door", consequence: "corridor" },
            { text: "Go back down", consequence: "lobby" }
        ]
    },
    corridor: {
        text: "The corridor is very narrow. A figure stands at the end.",
        image:"images/corridor.jpg",
        choices: [
            { text: "Approach the Figure", consequence: "figure" },
            { text: "Turn Back", consequence: "upper" }
        ]
    },
    figure: {
        text: "The figure vanishes. You find a glowing object.",
        image: "images/figure.jpg",
        choices: [
            { text:"Take the Object", consequence: "glowing" }
        ]
    },
    fountain: {
        text: "You find a key hidden in the fountain.",
        image:"images/fountain.jpg",
        choices: [
            { text: "Take the Key", consequence: "key" },
            { text: "Leave the Key", consequence: "noKey" }
        ]
    },
    study: {
        text: "You enter a study. A book lies open on the desk. You feel a sense of peace.",
        image:"images/study.jpg",
        choices: []
    },
    glowing: {
        text: "The object begins to glow brightly, and a door opens, revealing a blinding light.",
        image:"images/glowing.jpg",
        choices: [
            { text: "Enter the Light", consequence: "door" }
        ]
    },
    door: {
        text: "You enter the light, and find yourself in a beautiful, peaceful landscape.",
        image:"images/window.jpg",
        choices: []
    },
    key: {
        text: "You use the key to open a hidden door. You find a way out.",
        image:"images/key.jpg",
        choices: []
    },
    noKey: {
        text: "You leave the key. You find a locked chest, and cannot open it.",
        image:"images/noKey.jpg",
        choices: []
    },
    water: {
        text: "The room begins to flood. You are overwhelmed.",
        image:"images/water.jpg",
        choices: []
    },
    fear: {
        text: "You turn back, but the mansion's fear consumes you.",
        image:"images/fear.jpg",
        choices: []
    }
  };
  
  let currentState = "start";
  
  function startGame() {
    currentState = "start";
    updatePage();
  }
  
  function updatePage() {
    const currentScene = game[currentState];
    document.getElementById("story-text").textContent = currentScene.text;
    document.getElementById("game-image").src = currentScene.image;
  
    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = "";
  
    currentScene.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.dataset.choice = choice.consequence;
        button.addEventListener("click", handleChoice);
        choicesContainer.appendChild(button);
    });
  }
  
  function handleChoice(event) {
    currentState = event.target.dataset.choice;
    updatePage();
  }
  
  startGame();
