const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat"
    }
    }

    // console.log(adventurer.inventory[0])

    adventurer.inventory.forEach(function(item) {
        console.log(item);
    });