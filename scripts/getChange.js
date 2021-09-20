"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = __importDefault(require("yargs"));
var moneyUtil_1 = require("../src/util/moneyUtil");
// set up required arguments 
var argv = (0, yargs_1.default)(process.argv.slice(2)).options({
    provided: { type: 'number', demandOption: true },
    total: { type: 'number', demandOption: true },
}).argv;
var provided = argv.provided, total = argv.total;
var totalChange;
try {
    totalChange = (0, moneyUtil_1.getChange)(total, provided);
}
catch (error) {
    console.log(error);
    process.exit(1);
}
console.log("Total change $" + totalChange.totalChange);
console.log('Change for bills', totalChange.bills);
console.log('Change for coins', totalChange.coins);
