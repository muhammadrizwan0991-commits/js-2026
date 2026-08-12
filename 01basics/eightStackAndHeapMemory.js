// stack and heap memory

// stack (primitive), heap (non primitive) matlab primitive me stack memory hoti ha or non primitive me heap memory or ye jab bh stack memory use hoti ha to wo hame copy deti ha lekin heap hame reference deti ha direct original value

// let myAccountName = "Muhammad Rizwan";
// let myAccountAnotherName = myAccountName;
// myAccountAnotherName = "Muhammad Arshad"

// console.log(myAccountName);
// console.log(myAccountAnotherName);

// myaccountname ki value change nh hui wo wahi rahi balke myaccountanothername ki value change hogai matlab
// ye stack me hua ye ke usne hame copy di thi myAccountName ki to jo humne change kiya wo copy change kari na ke original value to bas yahi game ha saari stack ki 

// ab heap ki ye kahani ha ke wo direct reference deti ha bhai original value agar ap uski value change karo bad me to wo bhai hojayegi change na ke stack ki trah copy change nh hogi q ke fark ha stack derhi ha copy krke value original nh or heap derha ha original ye rha aage iska proof.

let myInfo = {
    name : "Mr Dev",
    age : 15,
    email: "Mr@gmail.com"
};

let myInfo2 = myInfo;
myInfo2.name = "Mr Mysterious";
myInfo2.email = "MrDev@gmail.com";
myInfo2.age = 14;

console.log(myInfo);
console.log(myInfo2);

// console.log([myInfo2.name, myInfo2.email]);

// han to bhai ye rha proof...