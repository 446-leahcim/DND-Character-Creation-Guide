const API = "https://www.dnd5eapi.co/api/2014/";

// Get HTML elements
const nameInput = document.getElementById("characterName");
const classSelect = document.getElementById("classSelect");
const inventory = document.getElementById("inventory");
const diceInput = document.getElementById("diceNotation");
const diceResult = document.getElementById("diceResult");

// 1. D&D API: load classes
async function getClasses() {
    try {
        const response = await fetch(`${API}classes`);

        if (!response.ok) {
            throw new Error("Could not fetch classes");
        }

        const data = await response.json();

        classSelect.innerHTML =
            '<option value="">Choose a class</option>';

        data.results.forEach(characterClass => {
            const option = document.createElement("option");

            option.value = characterClass.index;
            option.textContent = characterClass.name;

            classSelect.appendChild(option);
        });
    } catch (error) {
        console.error(error);
        classSelect.innerHTML =
            '<option value="">Failed to load classes</option>';
    }
}

getClasses();

// 2. SortableJS: drag inventory items
Sortable.create(inventory, {
    animation: 150
});

// 3. RPG Dice Roller: roll dice
document.getElementById("rollButton").addEventListener("click", () => {
    try {
        const notation = diceInput.value.trim();

        if (!notation) {
            throw new Error("Enter a dice expression");
        }

        const roll = new rpgDiceRoller.DiceRoll(notation);

        diceResult.textContent = roll.output;
    } catch (error) {
        diceResult.textContent = "Invalid dice expression.";
        console.error(error);
    }
});

// Collect the current character data
function getCharacterData() {
    return {
        name: nameInput.value,
        characterClass: classSelect.value,
        inventory: Array.from(inventory.children).map(
            item => item.textContent
        )
    };
}

// 4. localStorage: save the character
document.getElementById("saveButton").addEventListener("click", () => {
    localStorage.setItem(
        "dndCharacter",
        JSON.stringify(getCharacterData())
    );

    alert("Character saved!");
});

// Load the saved character
document.getElementById("loadButton").addEventListener("click", () => {
    const saved = localStorage.getItem("dndCharacter");

    if (!saved) {
        alert("No saved character found.");
        return;
    }

    try {
        const character = JSON.parse(saved);

        nameInput.value = character.name ?? "";

        // Wait until the class options are loaded.
        if (character.characterClass) {
            classSelect.value = character.characterClass;
        }

        inventory.replaceChildren();

        (character.inventory ?? []).forEach(itemName => {
            const item = document.createElement("li");
            item.className = "list-group-item";
            item.textContent = itemName;

            inventory.appendChild(item);
        });
    } catch (error) {
        console.error(error);
        alert("Could not load the saved character.");
    }
});

// 5. Lucide: turn icon placeholders into icons
lucide.createIcons();