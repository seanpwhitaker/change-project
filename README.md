# This is a change proessing library 

## Installation 

Run the command `npm install` or if you have yarn installed `yarn`

## Testing 

Run the command `npm run test` or if you have yarn installed `yarn test`

## Using the CLI 

Example `yarn getChange --total 55.55 --provided 100` or `npm run getChange -- --total 55.55 --provided 100`

## Using the postman collection under resources

Start the local server with `yarn watch` or `npm run watch`

Use the the postman collection for examples of a good and error request

# Asummptions
Assumes the drawer has all the possible change
Assumes we are returning change in an optimal format, which would be greatest denominations to least
Assumes we only know the price 
