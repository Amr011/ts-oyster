# **OysterCard Problem Solving Test**

## Problem Details

You are required to model the following fare card system which is a limited version of London’s
Oyster card system. At the end of the test, you should be able to demonstrate a user loading a card
with £30, and taking the following trips, and then viewing the balance

1. Tube Holborn to Earl’s Court
2. 328 bus from Earl’s Court to Chelsea
3. Tube from Earl’s court to Hammersmith

### OPERATION

-  When the user passes through the inward barrier at the station, their oyster card is charged
   the maximum fare.

-  When they pass out of the barrier at the exit station, the fare is calculated and the maximum
   fare transaction removed and replaced with the real transaction (in this way, if the user
   doesn’t swipe out, they are charged the maximum fare).
-  All bus journeys are charged at the same price.
-  The system should favour the customer where more than one fare is possible for a given
   journey. E.g. Holburn to Earl’s Court is charged at £2.50.

### ASSUME STATIONS ZONES ARE AS FOLLOWS

| Station      | Zone(s) |
| ------------ | ------- |
| Holborn      | 1       |
| Aldgatel     | 1       |
| Earl’s Court | 1,2     |
| Hammersmith  | 2       |
| Arsenal      | 2       |
| Wimbledon    | 3       |

### ASSUME FARES ARE AS FOLLOWS

| Journey                        | Fare  | Example                     |
| ------------------------------ | ----- | --------------------------- |
| Anywhere in Zone 1             | £2.50 | From Holborn to Aldgate     |
| Any one zone outside zone 1    | £2.00 | From Arsenal to Hammersmith |
| Any two zones including zone 1 | £3.00 | From Hammersmith to Holborn |
| Any two zones excluding zone 1 | £2.25 | From Arsenal to Wimbledon   |
| More than two zones (3+)       | £3.20 | From Wimbledon to Aldgate   |
|                                |
| Any bus journey                | £1.80 | Earl’s Court to Chelsea     |
|                                |

### OTHER CONSIDERATIONS

-  Any bus journey costs a flat rate of £1.80 regardless of the journey stations.
-  The maximum possible fare is therefore £3.20

---

## This Test Developed using `Typescript` Language

## requirements for starting this project

`you need to have node installed in your system, run this command to check if the node is installed`

```
 node -v
```

`you need to have npm installed in your system, run this command to check if the npm is installed`

```
 npm -v
```

## Installation Instructions

`install dependencies first`

```
$ npm install
```

### Commands you can run the code with

`for running in development mode`

```
$ npm run dev
```

`for running in normal mode`

```
$ npm run start
```

`for building the project to production mode`

```
$ npm run dev
```

`for watching the files changes in the compiler of typescript`

```
$ npm run watch
```

### By Amr Aboras [amraboras109@gmail.com](amraboras109@gmail.com)
