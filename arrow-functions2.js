var arr = [1,2,3,4,5]

var arrEven = arr.filter(
    function(elem){
        return elem%2 == 0
    }
);
console.log(arrEven)
arrEven = arr.filter( elem => elem%2 == 0)
console.log(arrEven)

var obj = {
    name: "Hello",
    myName: "lll",
    displayName: function(){
        console.log(this.myName)
        setTimeout( function(){
            console.log("output="+this.name)
        },1000);
    }
}

obj.displayName()

var obj2 = {
    name: "Hello",
    myName: "lll",
    displayName: function(){
        console.log(this.name)
        setTimeout( () => console.log("my name is "+this.name),1000);
    }
}

obj2.displayName()