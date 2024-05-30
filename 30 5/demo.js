// Q1 Q2 Q3 Q4 Q5
var itemPrice = 3000;

function price(x) {
  var saleDiscount = 0.8;
  var finalPrice = 0;
  discount(saleDiscount);
  function discount(y) {
    var priceInPence = x * y;
    backToPounds(priceInPence);
    function backToPounds(z) {
      poundSign = "£";
      let percent = 100;
      finalPrice = z / percent;
      {
        const inaccesible = "Can't find me";
      }
      //   console.log(inaccesible);
    }
    // console.log(itemPrice * percent);
  }
  return finalPrice;
}
console.log(price(itemPrice));
console.log(poundSign);

// Q6

var phonebook = {
  name: "John",
  areaCode: "0161",
  localNum: "315729",
  fullNum: function () {
    return this.areaCode + this.localNum;
  },
};
console.log(phonebook.fullNum());

// Q7 Q8
var phonebook2 = {
  name: "Steve",
  areaCode: "0121",
  localNum: "318229",
};
console.log(phonebook.fullNum.call(phonebook2));

// Q11
setTimeout(() => {
  console.log("5 seconds have passed");
}, 5 * 1000);

// Q12
setInterval(() => {
  console.log("5 more seconds have passed");
}, 5 * 1000);

// Q13
try {
  console.log("Start test");
  iDontExist;
  console.log("Won't make it here");
} catch (err) {
  console.log("There's a boo boo:" + err);
}
