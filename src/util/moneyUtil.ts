import { Bills, Change, Coins } from "../models/money";

// stanard bills, excluding $2 
// fifties, twenties, tens, fives, dollars  
export const getBills = (change: number): Bills => {

    // if there's no bills let's not process anything
    if (!change) {
        return {
            fifties: 0,
            fives: 0,
            hundreds: 0,
            ones: 0,
            tens: 0,
            twenties: 0
        }
    }

    // a little paranoid with the Math.abs but I don't want this to support negative numbers
    let ones = Math.abs(parseInt(change.toString().split('.')[0]));

    const hundreds: number = Math.floor(ones / 100);

    if (hundreds) {
        ones -= (hundreds * 100);
    }

    const fifties: number = Math.floor(ones / 50);

    if (fifties) {
        ones -= (fifties * 50);
    }

    const twenties: number = Math.floor(ones / 20);

    if (twenties) {
        ones -= (twenties * 20);
    }

    const tens: number = Math.floor(ones / 10);

    if (tens) {
        ones -= (tens * 10);
    }

    const fives: number = Math.floor(ones / 5);

    if (fives) {
        ones -= (fives * 5);
    }

    return {
        fifties,
        fives,
        hundreds,
        ones,
        tens,
        twenties,
    }
}

// get the total change
export const getChange = (total: number, provided: number): Change => {
    if (provided < total) {
        throw ('Demand they pay full price!!!');
    }

    const change = parseFloat((provided - total).toFixed(2));
    const bills: Bills = getBills(change);
    const coins: Coins = getCoins(change);

    return {
        bills,
        totalChange: change,
        coins
    }
}

// standard coins 
// quarters, dimes, nickles, pennies 
export const getCoins = (change: number): Coins => {

    // check if there is coins to process
    // if not return 0 for all coins; 
    if (change % 1 === 0) {
        return { dimes: 0, nickles: 0, pennies: 0, quarters: 0 };
    }

    // a little paranoid with the Math.abs but I don't want this to support negative numbers
    let pennies: number = Math.abs(parseInt(change.toString().split('.')[1]));

    const quarters: number = Math.floor(pennies / 25);

    if (quarters) {
        pennies -= (quarters * 25);
    }

    const dimes: number = Math.floor(pennies / 10);

    if (dimes) {
        pennies -= (dimes * 10);
    }

    const nickles: number = Math.floor(pennies / 5);

    if (nickles) {
        pennies -= (nickles * 5);
    }

    return {
        dimes,
        nickles,
        pennies,
        quarters
    }
}

