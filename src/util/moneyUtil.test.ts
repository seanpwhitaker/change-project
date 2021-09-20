import { Bills, Change, Coins } from "../models/money";
import { getBills, getChange, getCoins } from "./moneyUtil";

const shouldBeEmpytyTotal: Change = {
    totalChange: 0,
    bills: {
        fifties: 0,
        fives: 0,
        hundreds: 0,
        ones: 0,
        tens: 0,
        twenties: 0
    },
    coins: { dimes: 0, nickles: 0, pennies: 0, quarters: 0 }
}


describe(`We're going to test total change!`, () => {

    it('should be 0s!!!', () => {
        expect(getChange(200, 200)).toEqual(shouldBeEmpytyTotal)
    });

    it('should be 5 hundreds, 2 dimes, and 3 pennies!!!', () => {

        const shouldBeTotal: Change = {
            totalChange: 500.23,
            bills: {
                fifties: 0,
                fives: 0,
                hundreds: 5,
                ones: 0,
                tens: 0,
                twenties: 0
            },
            coins: { dimes: 2, nickles: 0, pennies: 3, quarters: 0 }
        }
        expect(getChange(99.77, 600)).toEqual(shouldBeTotal)
    });

    it('should throw an error!', () => {
        expect(() => { getChange(400, 300) }).toThrow('Demand they pay full price!!!');
    })
})

describe(`We're going to test coins!`, () => {

    it('should be 0s!!!', () => {
        expect(getCoins(0)).toEqual(shouldBeEmpytyTotal.coins)
    });

    it('should be 1 dimes, 1 nickel, 3 pennies, and a quarter!!!', () => {

        const shouldBeTotal: Coins = {
            dimes: 0, nickles: 1, pennies: 3, quarters: 1
        }

        expect(getCoins(100.33)).toEqual(shouldBeTotal)
    });

    it('should be 1 dimes, 1 nickel, 3 pennies, and a quarter negative test!!!', () => {

        const shouldBeTotal: Coins = {
            dimes: 0, nickles: 1, pennies: 3, quarters: 1
        }

        expect(getCoins(-100.33)).toEqual(shouldBeTotal)
    });

})

describe(`We're going to test bills!`, () => {

    it('should be 0s!!!', () => {
        expect(getBills(0.56)).toEqual(shouldBeEmpytyTotal.bills)
    });

    it('should be 2 dimes, and 3 pennies, and a quarter!!!', () => {

        const shouldBeBills: Bills = {
            fifties: 0,
            fives: 0,
            hundreds: 1,
            ones: 3,
            tens: 0,
            twenties: 1
        }

        expect(getBills(123)).toEqual(shouldBeBills)
    });

    it('should be 2 dimes, and 3 pennies, and a quarter negative test!!!', () => {

        const shouldBeBills: Bills = {
            fifties: 0,
            fives: 0,
            hundreds: 1,
            ones: 3,
            tens: 0,
            twenties: 1
        }

        expect(getBills(-123)).toEqual(shouldBeBills)
    });
})