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
        this.alive = true
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
        let damage = this.weapons.damage
        let delta=enemy.getHealth()-damage
        enemy.setHealth(delta)
        console.log(enemy.name+" health is "+enemy.getHealth()+ " attacked by "+this.name)
        if(enemy.getHealth() <= 0){
            console.log(enemy.name+" is dead")
            this.alive = false
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
        this.alive = true
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
        let damage = this.weapons.damage
        let delta=enemy.getHealth()-damage
        enemy.setHealth(delta)
        console.log(enemy.name+" health is "+enemy.getHealth()+" attacked by "+this.name)
        if(enemy.getHealth() <= 0){
            console.log(enemy.name+" is dead")
            this.alive = false
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

class Game{
    constructor(...params){
        this.players = [...params]
    }

    random_index(){
        let index= Math.floor(Math.random() * this.players.length)
        return index
    }

    start(){
        for(let i=0; i < 8;i++){
        let attacker=this.attacker_selection()
        let enemy=this.enemy_selection(attacker)
        attacker.attack(enemy)
        }
    }

    attacker_selection(){
        let index = this.random_index()
        let player = this.players[String(index)]
        if(player.alive == true)
            this.players.splice(index,1)
            return player
    }

    enemy_selection(attacker){
        let index = this.random_index()
        let enemy = this.players[String(index)]
        this.players.push(attacker)
        return enemy
    }
}

alien1=new Alien()
alien2=new Alien()
human=new Human()
game = new Game(alien1, alien2, human)
game.start()