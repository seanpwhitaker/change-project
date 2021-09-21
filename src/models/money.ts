export interface Bills {
    fifties: number;
    fives: number;
    hundreds: number;
    ones: number;
    tens: number;
    twenties: number;
}

export interface Change {
    bills:Bills;
    totalChange: number;
    coins:Coins;
}

export interface Coins {
    dimes: number;
    nickles: number;
    pennies: number;
    quarters: number;
}

export interface ChangeRequest {
    provided: number;
    total: number;
}