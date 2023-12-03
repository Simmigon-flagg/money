// TO-DO Use this income variable to run the
// program for all tax values
// from 50k - 300k
let incomes = [125000];
/**
 * What are the standard deductions?
 * The standard deduction reduces your taxable income
 * leading to a lower 
 * federal tax bill. The following tables represent
 * the standard deductions in different tax brackets.
 * If your standard deduction exceeds
 * the total of the itemized deductions,
 * it makes sense to claim the standard deduction.
 */
let standDeductions = 12950.00;
let singleAdjustedGrossIncome = incomes[0] - standDeductions;

// Means married to one person
let MarriedStandDeductions = standDeductions * 2;
let MarriedAdjustedGrossIncome = incomes[0] + incomes[1] + (standDeductions * 2);

// This is where we save money
let otherDeductions = [];
const rates = [.1, .12, .22, .24, .32, .35, .37];

const single = {
    bracket: {
        startRange: [0, 9701, 39476, 84201, 160726, 204101, 510301],
        endRange: [9700, 39475, 84200, 160725, 204100, 510301, 1],
    }
};

const married = {
    bracket: {
        startRange: [0, 9701, 39476, 84201, 160726, 204101, 510301],
        endRange: [9700, 39475, 84200, 160725, 204100, 510301, 510302],
    }
};

const single2022 = {
    bracket: {
        startRange: [0, 10276, 41776, 89076, 170051, 215951, 539901],
        endRange: [10275, 41775, 89075, 170050, 215950, 539900, 1],
    }
};

const married2022 = {
    bracket: {
        startRange: [0, 20551, 83551, 178151, 340101, 431901, 647851],
        endRange: [20550, 83550, 178150, 340100, 431900, 647850, 1],
    }
};

function calculateSinglesBrackets(singleAdjustedGrossIncome) {
    let bracket = []
    let lastBracket = 1;

    console.log("Gross income " + incomes[0]);
    console.log("Single Adjusted Gross Income " + singleAdjustedGrossIncome);
    console.log(incomes[0] - singleAdjustedGrossIncome);
    console.log("Single Adjusted Gross Income " + singleAdjustedGrossIncome);
    console.log();
    for (let index = 0; index < single.bracket.startRange.length; index++) {
        if (single.bracket.startRange[index] <= singleAdjustedGrossIncome && singleAdjustedGrossIncome >= single.bracket.endRange[index]) {
            const money = single.bracket.endRange[index] - single.bracket.startRange[index]
            console.log(rates[index] + "\t" + single.bracket.startRange[index] + "\t" + single.bracket.endRange[index] + "\t" + (money.toFixed(2)));

        }
        if (single.bracket.startRange[index] <= singleAdjustedGrossIncome && singleAdjustedGrossIncome <= single.bracket.endRange[index]) {
            const money = singleAdjustedGrossIncome - single.bracket.startRange[index]
            console.log(rates[index] + "\t" + single.bracket.startRange[index] + "\t" + single.bracket.endRange[index] + "\t" + (money.toFixed(2)));

        }
        // console.log(index + "\t" + rates[index] + );        
    }
    console.log();
    console.log("Rates: ");
    let sum = 0;
    for (let index = 0; index < single.bracket.startRange.length; index++) {
        let taxes = 0;
        if (single.bracket.startRange[index] <= singleAdjustedGrossIncome && singleAdjustedGrossIncome >= single.bracket.endRange[index]) {
            // 9700                         - 0
            const money = single.bracket.endRange[index] - single.bracket.startRange[index];
            taxes = (rates[index] * money);

            console.log(rates[index] + "\t\t\t\t" + taxes.toFixed(2));
            sum += taxes;
        }
        if (single.bracket.startRange[index] <= singleAdjustedGrossIncome && singleAdjustedGrossIncome <= single.bracket.endRange[index]) {
            const money = singleAdjustedGrossIncome - single.bracket.startRange[index];
            taxes = (rates[index] * money);

            console.log(rates[index] + "\t\t\t\t" + taxes.toFixed(2));
            sum += taxes;

        }
        // console.log(index + "\t" + rates[index] + );

    }


    console.log("");
    console.log("Total tax due:\t\t\t\t" + (sum).toFixed(2));
    console.log("");
    console.log("Total / year:\t\t\t\t" + ((incomes[0] - sum) / 1).toFixed(2));
    console.log("Total / 6 months:\t\t\t" + (sum / 2).toFixed(2));
    console.log("Total / 4 months:\t\t\t" + (sum / 3).toFixed(2));
    console.log("Total / 3 months:\t\t\t" + (sum / 4).toFixed(2));
    console.log("Total / monthly:\t\t\t" + (sum / 12).toFixed(2));
    console.log("Total / bi-weekly:\t\t\t" + (sum / 26).toFixed(2));
    console.log("Total / week:\t\t\t\t" + (sum / 52).toFixed(2));

    return sum;
}
function calculateSinglesBrackets2022(singleAdjustedGrossIncome) {
    console.log("Gross income " + incomes[0]);
    console.log("Standard income " + incomes[0] + " - " + (standDeductions) + " = " + singleAdjustedGrossIncome);
    console.log();
    console.log("Single Adjusted Gross Income " + singleAdjustedGrossIncome);
    console.log();
    console.log("You will pay taxes on $" + (singleAdjustedGrossIncome) + " dollars");

    console.log("Below is the 2022 tax bracket");
    for (let index = 0; index < single2022.bracket.startRange.length; index++) {
        if (single2022.bracket.startRange[index] <= singleAdjustedGrossIncome && singleAdjustedGrossIncome >= single2022.bracket.endRange[index]) {
            const money = single2022.bracket.endRange[index] - single2022.bracket.startRange[index]
            console.log(rates[index] + "\t" + single2022.bracket.startRange[index] + "\t" + single2022.bracket.endRange[index] + "\t" + (money.toFixed(2)));

        }
        if (single2022.bracket.startRange[index] <= singleAdjustedGrossIncome && singleAdjustedGrossIncome <= single2022.bracket.endRange[index]) {
            const money = singleAdjustedGrossIncome - single2022.bracket.startRange[index]
            console.log(rates[index] + "\t" + single2022.bracket.startRange[index] + "\t" + single2022.bracket.endRange[index] + "\t" + (money.toFixed(2)));

        }
        // console.log(index + "\t" + rates[index] + );        
    }
    console.log();
    console.log("Rates: ");
    console.log("Your calculated rates for 2022");
    let sum = 0;
    for (let index = 0; index < single2022.bracket.startRange.length; index++) {
        let taxes = 0;
        if (single2022.bracket.startRange[index] <= singleAdjustedGrossIncome && singleAdjustedGrossIncome >= single2022.bracket.endRange[index]) {
            // 9700                         - 0
            const money = single2022.bracket.endRange[index] - single2022.bracket.startRange[index];
            taxes = (rates[index] * money);

            console.log(rates[index] + "\t\t\t\t" + taxes.toFixed(2));
            sum += taxes;
        }
        if (single2022.bracket.startRange[index] <= singleAdjustedGrossIncome && singleAdjustedGrossIncome <= single2022.bracket.endRange[index]) {
            const money = singleAdjustedGrossIncome - single2022.bracket.startRange[index];
            taxes = (rates[index] * money);

            console.log(rates[index] + "\t\t\t\t" + taxes.toFixed(2));
            sum += taxes;

        }
        // console.log(index + "\t" + rates[index] + );

    }

    const totalTaxDue = (sum).toFixed(2);
    const months6 = (sum / 2).toFixed(2);
    const months4 = (sum / 3).toFixed(2);
    const months3 = (sum / 4).toFixed(2);
    const monthly = (sum / 12).toFixed(2);
    const biWeekly = (sum / 26).toFixed(2);
    const week = (sum / 52).toFixed(2);



    console.log("");
    console.log("Yearly federal taxes: $%d - $%d = $%d", incomes[0], sum, incomes[0] - sum);
    console.log("");
    console.log("Pay Check:");
    console.log("Year        \t\ttax        \tMonth        \ttax        \tBi Weekly\ttax        \tWeek        \ttax");
    const afterTax = incomes[0] - sum;
    console.log(afterTax.toFixed(2) + "\t\t" + totalTaxDue + "\t" + (afterTax / 12).toFixed(2) + "\t\t" + monthly + "\t\t" + (afterTax / 26).toFixed(2) + "\t\t" + biWeekly + "\t\t" + (afterTax / 52).toFixed(2) + "\t\t" + week);

    console.log("");
    console.log("50/20/30 Rule");
    console.log("");
    console.log("50: Housing        \ttax        \tMonth        \ttax        \tBi Weekly\ttax        \tWeek        \ttax");
    console.log(afterTax.toFixed(2) * .50 + "\t\t" + "$00.00" + "\t\t" + (afterTax / 12).toFixed(2) * .50 + "\t\t" + "$00.00" + "\t\t" + (afterTax / 26).toFixed(2) * .50 + "\t\t" + "$00.00" + "\t\t" + (afterTax / 52).toFixed(2) * .50 + "\t" + "$00.00");
    console.log("");

    console.log("20: Savings        \ttax        \tMonth        \ttax        \tBi Weekly\ttax        \tWeek        \ttax");
    console.log(afterTax.toFixed(2) * .20 + "\t\t" + "$00.00" + "\t\t" + ((afterTax / 12) * .20).toFixed(2) + "\t\t" + "$00.00" + "\t\t" + (afterTax / 26).toFixed(2) * .20 + "\t\t" + "$00.00" + "\t\t" + (afterTax / 52).toFixed(2) * .20 + "\t\t" + "$00.00");

    console.log("");
    console.log("30: Extra        \ttax        \tMonth        \ttax        \tBi Weekly\ttax        \tWeek        \ttax");
    console.log(afterTax.toFixed(2) * .30 + "\t\t" + "$00.00" + "\t\t" + ((afterTax / 12) * .30).toFixed(2) + "\t\t" + "$00.00" + "\t\t" + ((afterTax / 26) * .30).toFixed(2) + "\t\t" + "$00.00" + "\t\t" + ((afterTax / 26) * .30).toFixed(2) + "\t\t" + "$00.00");



    // console.log("");
    // console.log("");

    // console.log("Taxes owed at these intervals");
    // console.log("6 months:\t" + months6);
    // console.log("4 months:\t" + months4);
    // console.log("3 months:\t" + months3);


    return sum;
}

const marriedBracket = {
    bracket: {
        endRange: [],
        startRange: [],
    }
};


// console.log({ MarriedStandDeductions });// Only married to one person
// console.log({ MarriedAdjustedGrossIncome });

// console.log(incomes[0]);
// console.log({ standDeductions });
// console.log({ singleAdjustedGrossIncome });
// console.log(singleAdjustedGrossIncome);


calculateSinglesBrackets2022(singleAdjustedGrossIncome);