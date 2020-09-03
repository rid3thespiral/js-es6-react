class Weapon{
    constructor(name){
        this.name = name
        if(name == "pistol")
            this.damage = 20
        else if(name == "laser")
            this.damage = 30
        else if(name == "blade")
            this.damage = 10
        else 
            this.damage = 0
    }
}

class Alien{
    constructor(weapons){
        if(weapons != undefined)
            this.weapons = [new Weapon("pistol")].concat(new Weapon(weapons))
        else
            this.weapons = new Weapon("pistol")
        this.health = 80
        this.name = "Alien"+this.makeid(2)
    }
    getWeapons(){
        return this.weapons
    }
    getHealth(){
        return this.health
    }
    setHealth(deltaHealth){
        this.health = deltaHealth
    }
    addWeapons(weapon){
        this.weapons.push(...weapon)
    }
    attack(enemy){
        let damage = this.weapons[0].damage
        let delta=enemy.getHealth()-damage
        enemy.setHealth(delta)
        console.log(enemy.name+" health is "+enemy.getHealth())
        if(enemy.getHealth() < 0){
            console.log(enemy.name+" is dead")
            enemy = null
        }
    }
    makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
}

class Human{
    constructor(weapons){
        if(weapons != undefined)
            this.weapons = [new Weapon("pistol")].concat(new Weapon(weapons))
        else
            this.weapons = new Weapon("pistol")
        this.health=50
        this.name="Human"+this.makeid(2)
    }
    getWeapons(){
        return this.weapons
    }
    getHealth(){
        return this.health
    }
    setHealth(deltaHealth){
        this.health = deltaHealth
    }
    addWeapons(weapon){
        this.weapons.push(...weapon)
    }
    attack(enemy){
        let damage = this.weapons[0].damage
        let delta=enemy.getHealth()-damage
        enemy.setHealth(delta)
        console.log(enemy.name+" health is "+enemy.getHealth())
        if(enemy.getHealth() == 0){
            console.log(enemy+" is dead")
            enemy = null
        }
    }
    makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
}

var alien = new Alien("laser")
var human = new Human("laser")
