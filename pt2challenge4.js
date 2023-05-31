
// Calculate the percentage tip of each element in the bill array, and totals of the each tip and bill
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86,52];
const tips = [];
const totals = [];

const calcTip = function (bill){
    return  bill >= 50 && bill <= 300 ? (bill * 0.15) : (bill * 0.2);
}

for (let i = 0; i<bills.length; i++) {
    const tip = calcTip(bills[i]);

//push tip and bills + total into tips and totals
    tips.push (tip);
    totals.push (bills[i] + tips[i]);
}

console.log ( tips, totals);

//calculate the average of tips array and total array
const calcAverage = function(arr){
    sum = 0;
    for(i = 0; i<arr.length; i++) {
sum = sum + arr[i];
    }
    return sum/arr.length;
}
console.log(calcAverage([2,3,7]));

console.log(calcAverage(tips), calcAverage(totals));
