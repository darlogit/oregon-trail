console.log("how far na");


class Traveler {
    constructor(bigMan) {
        this.name = bigMan;
        this.food = 1;
        this.isHealthy = true;

    }
    hunt() {
        // Increases the traveler's food by 2
        this.food += 2;

    }
    eat() {
        // Consumes 1 unit of the traveler's food. If the traveler doesn't have any food left to eat, the traveler is no longer healthy (set isHealthy to false).

        if (this.food === 0) {
            this.isHealthy = false;
        } else {
            this.food -= 1;
        }
    }

}




let T = new Traveler("bigman");


class Wagon {
    constructor(capa) {
        this.capacity = capa;
        this.passanger = [];


    }
    getAvailableSeatCount() {
        return this.capacity - this.passanger.length
    }
    join(traveler) {
        if (this.getAvailableSeatCount() !== 0) {
            this.passanger.push(traveler)


        }

    }
    shouldQuarantine() {
        let sickCount = 0
        
        for (let i = 0; i < this.passanger.length; i++) {
            console.log(this.passanger[i].isHealthy)
            if (this.passanger[i].isHealthy===false) {
sickCount = sickCount +1

            }

        }
        if(sickCount > 0){
return true
        }else{
            return false

        }

    }

    totalFood() {
        let total = 0
        for (let i = 0; i < this.passanger.length; i++) {
            console.log(this.passanger[i].food)
            total = total + this.passanger[i].food


        }



        return total
    }
}