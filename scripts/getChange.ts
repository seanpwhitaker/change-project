import yargs from 'yargs';
import { Change } from '../src/models/money';
import { getChange } from '../src/util/moneyUtil';

// set up required arguments 
const argv = yargs(process.argv.slice(2)).options({
    provided: { type: 'number', demandOption: true },
    total: { type: 'number', demandOption: true },
}).argv as { provided: number, total: number };

const { provided, total } = argv

let totalChange: Change;
try {
    totalChange = getChange({provided, total});
} catch (error) {
    console.log(error);
    process.exit(1);
}

console.log(`Total change $${totalChange.totalChange}`);
console.log('Change for bills', totalChange.bills);
console.log('Change for coins', totalChange.coins);