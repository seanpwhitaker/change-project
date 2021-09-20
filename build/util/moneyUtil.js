"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoins = exports.getChange = exports.getBills = void 0;
// stanard bills, excluding $2 
// fifties, twenties, tens, fives, dollars  
var getBills = function (change) {
    // if there's no bills let's not process anything
    if (!change) {
        return {
            fifties: 0,
            fives: 0,
            hundreds: 0,
            ones: 0,
            tens: 0,
            twenties: 0
        };
    }
    // a little paranoid with the Math.abs but I don't want this to support negative numbers
    var ones = Math.abs(parseInt(change.toString().split('.')[0]));
    var hundreds = Math.floor(ones / 100);
    if (hundreds) {
        ones -= (hundreds * 100);
    }
    var fifties = Math.floor(ones / 50);
    if (fifties) {
        ones -= (fifties * 50);
    }
    var twenties = Math.floor(ones / 20);
    if (twenties) {
        ones -= (twenties * 20);
    }
    var tens = Math.floor(ones / 10);
    if (tens) {
        ones -= (tens * 10);
    }
    var fives = Math.floor(ones / 5);
    if (fives) {
        ones -= (fives * 5);
    }
    return {
        fifties: fifties,
        fives: fives,
        hundreds: hundreds,
        ones: ones,
        tens: tens,
        twenties: twenties,
    };
};
exports.getBills = getBills;
// get the total change
var getChange = function (total, provided) {
    if (provided < total) {
        throw ('Demand they pay full price!!!');
    }
    var change = parseFloat((provided - total).toFixed(2));
    var bills = (0, exports.getBills)(change);
    var coins = (0, exports.getCoins)(change);
    return {
        bills: bills,
        totalChange: change,
        coins: coins
    };
};
exports.getChange = getChange;
// standard coins 
// quarters, dimes, nickles, pennies 
var getCoins = function (change) {
    // check if there is coins to process
    // if not return 0 for all coins; 
    if (change % 1 === 0) {
        return { dimes: 0, nickles: 0, pennies: 0, quarters: 0 };
    }
    // a little paranoid with the Math.abs but I don't want this to support negative numbers
    var pennies = Math.abs(parseInt(change.toString().split('.')[1]));
    var quarters = Math.floor(pennies / 25);
    if (quarters) {
        pennies -= (quarters * 25);
    }
    var dimes = Math.floor(pennies / 10);
    if (dimes) {
        pennies -= (dimes * 10);
    }
    var nickles = Math.floor(pennies / 5);
    if (nickles) {
        pennies -= (nickles * 5);
    }
    return {
        dimes: dimes,
        nickles: nickles,
        pennies: pennies,
        quarters: quarters
    };
};
exports.getCoins = getCoins;
