const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["small hat", "sunglasses"] 
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
        
    }

    // console.log(adventurer.inventory[0])

    adventurer.inventory.forEach(function(item) {
        console.log(item);
    });

    adventurer.roll()

    // Part two: class fantasy

    class Character {
        constructor (name) {
          this.name = name;
          this.health = 100;
          this.inventory = [];
        }
        roll (mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`)
            }
      }

    //   const robin = new Character("Robin");
    //   robin.inventory = ["sword", "potion", "artifact"];
    //   robin.companion = new Character("Leo");
    //   robin.companion.type = "Cat";
    //   robin.companion.companion = new Character("Frank");
    //   robin.companion.companion.type = "Flea";
    //   robin.companion.companion.inventory = ["small hat", "sunglasses"];

    //   robin.companion.roll();
    //   robin.companion.companion.roll();

      // Part three: class features

      class Adventurer extends Character {
        constructor (name, role, power, trait) {
          super(name);
          // Adventurers have specialized roles.
          this.role = role;
          this.power = power;
          this.trait = trait;
          this.inventory = [];
          // Every adventurer starts with a bed and 50 gold coins.
          this.inventory.push("bedroll", "50 gold coins");
        }
        // Adventurers have the ability to scout ahead of them.
        scout () {
          console.log(`${this.name} is scouting ahead...`);
          super.roll(); // super calls upon parent property
        }
      }

      class Companion extends Character {
        constructor (name, type, trait) {
            super(name);
            this.type = type;
            this.trait = trait;
            this.inventory = [];
        }
      }

      const robin = new Adventurer("Robin");
      const frank = new Companion("Frank");
      const leo = new Companion("Leo")

      robin.inventory = ["sword", "potion", "artifact"];
      leo.inventory = ["small hat", "sunglasses"];

      console.log(leo.inventory)