// console.log("Strings");
// console.log("Hello " + "World");

// const name = "Fahad";
// const age = 15;
// const city = "Hyderabad";

// // console.log(name + age + " Hyderabad"); // is syntax ko ajj ke date me nh likhna chayiye bilkul hi outdated ha balke is trah likhna chayiye:

// // hum use krenge ajj ki date me back ticks `` ye isko kehte hen string interpolation

// console.log(
//   `My name is ${name} and my age is ${age} and i live in ${city.toUpperCase()}`,
// );

// ye use hota ha ajj ke time par uper wala string interpolation/ template literal yani back tick ke sath ` ` ye isme hum string or variable dono sath daalskte aram se

// string ko declare karne ka ek or tareeke bh ha new keyword se

const newStringWay = new String("Robert");
// console.log(newStringWay);
// console.log(typeof newStringWay);

// string array nh string ek object ha or jo image copy.png me 0 se value ha na wo iski key ha 0 or aage F iski value ha isse kehte hen key pair

// // ab khelenge key value se

// console.log(newStringWay[0], newStringWay[1]);
// console.log(newStringWay.__proto__);
// console.log(newStringWay.length);

// char maloom karne ke liye hame is trah karna parega or yaad rhe isme bh wahi ha 0 se start hoga scene
// console.log(newStringWay.charAt(0));
// console.log(newStringWay.charAt(1));
// console.log(newStringWay.charAt(2));

// // han agar hame maloom karna ha ke konsi position pe R ha O Ha B ha to uske liye ye hoga

// console.log(newStringWay.indexOf('R'));
// console.log(newStringWay.indexOf('o'));
// console.log(newStringWay.indexOf('b'));

// to ye aise bh kaam krega substring wala scene
console.log(newStringWay.substring(0, 4));
// par good practice ye ha ke ap ek variable bnao usme isko daalo newStringWay ko

const newStringWayTwo = newStringWay.substring(0, 4);
console.log(newStringWayTwo);
console.log(newStringWayTwo.toUpperCase());
console.log(newStringWayTwo.toLowerCase());
console.log(newStringWayTwo.charAt(0));
console.log(newStringWayTwo.indexOf("R"));
console.log(newStringWayTwo.indexOf("o")); // mze ki cheez mene jab isko o ko capital O me daala to jo value thi na 1 original wo -1 hogai or jab wapis o small me likha to 1 hi hogai hahahaha what the fuck or ek or cheez indexof jo ha wo 1 hi dafa me work kiya ek sath to char ki position nh batai usne

// slice ye raha 

const stringForSlice = newStringWay.slice(-5,4);
console.log(stringForSlice);
// slice jaha tk mjhe smjh aya value ko kaat raha ha 
/// or han slice wo wahid ha jisme hum negative - value deskte hen or isko koi msla nh baqi indexof wgera - ko dkeh kr ignore krdenge 

// ab ye raha trim isme na jo faltu spaces hongi na hmari string me ya jo bh string ho usme to ye kiya krega un faltu spaces ko clean krke string print krega ye dekho 

const stringForTrim = "            Fahad            ";
console.log(stringForTrim);
console.log(stringForTrim.trim());
// perfectly sari space kaat di usne faltu spaces ko khatam krta ha trim 

// ye raha replace isme na jo bh cheezein hongi jo hame nh chayiye ya replace hon jese sir ne example di url ki ke browser leta ha %20 spaces nh smjhta to lgata ha to isko kaatne ke liye hum use krenge replace

const url = "https://Robert.com/Robert%20Developer";
console.log(url);
console.log(url.replace('%20','-'));
// console.log(url.replace('%20','-','Developer','Mr-Developer')); // isme bh yahi ha one thing at a time horahi ha laadle yaad rkhne wali bat

// agar me kuch puchna chata hun ke url me ya isme ye ha ya nh to me aise krunga

console.log(url.includes('Robert')); // isme bh yahi game ha small letter or capital letter bari aham ha agar capital ha to capital se hi check hogi wo 
console.log(url.includes('developer'));

// split 

const newTerm = "Robert Developer Hello";
// console.log(newTerm.split('-'));
// console.log(newTerm.split(' '));
// console.log(newTerm.split(''));
// console.log(newTerm.split('R'));


// ye wo cheez kaat rha ha string me se jo isko boli jarahi ha jese me isko kehdun ke newTerm me se space kaatdo to ye kaatdega agar usme robert me se R katwana to wo kaat dega


