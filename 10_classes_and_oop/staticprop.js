class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const Pramila = new User("Pramila")
console.log(Pramila.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email 
    }
}

const realme = new Teacher ("realme", "realme@phone.com")
realme.logMe();

