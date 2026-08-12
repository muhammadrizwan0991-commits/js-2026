// console.log("hello world");

// there are two types of data types in js

// primitive / non primitive jisko reference bh bola jata ha

// primitive
// or ye callbyvalue hen ye copy krke diya jata ha
// 7 types of primitive : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// non primitive / reference type

// Array, Objects, Functions

let numberId = Symbol("123");
let newNumberId = Symbol("123");
console.log(numberId === newNumberId);
// symbol ka khel hi aisa ha jaha ye lagega bhale wo value same hi q na ho ye nh kahega same ye har ko unique krta ha

const bigNumber = 3214431423141134324324234;
console.log(bigNumber);

let arrayMyHeroes = ["Batman", "Wolvarine", "Magneto", "Thor"];
let myObj = {
  name: "Fahad",
  age: 15,
};
// yaad rkhne wali bat jo ye {} ke ander jo bh hoga js me wo object kehlayega hamesha

const myFunction = function(){
    console.log("Hello World");
}

// non primitive data types jo hen unko hamesha object hi bola jata ha ab jse function ka typeof function hi ayaiga lekin usko object function parhenge object ka object 

console.log(typeof arrayMyHeroes);

// array ka bh object hi aya hehe




