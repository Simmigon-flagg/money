
function paycheck(topic, amount, taxName) {
    const federalTax = calculateSinglesBrackets2022(amount);
    console.log(federalTax);
    const fica = socialsecuritytax + medicaretax;
    const AGI = amount - federalTax - fica;
    console.log(taxName + "'s paycheck");
    payout(amount, "2023");
    payout(socialsecuritytax, "Social Security")    
    payout(medicaretax, "Medicare")
    payout(fica, "FICA")
    payout(federalTax, "Federal")
    // console.log("State Income Tax	$" + (amount / 12).toFixed(2));
    // payout(topic, amount, "State")
    // console.log("City Income Tax	$" + (amount / 12).toFixed(2));
    // console.log("Deductions withheld	$" + (amount / 12).toFixed(2));
    console.log("AGI Pay Check	$" + (AGI).toFixed(2));


}
function payout(money, placeholder) {

    const monthly = money / 12;
    const semiMonthly = money / 24;
    const biWeekly = money / 26;
    const weekly = money / 52;
    const day = money / 52 / 5; // five days
    const hour = money / 52 / 40; // 40 hours    
    console.log("Payouts for " + placeholder)
    console.log("Yearly:", money)
    // console.log("\tMonthly:\t$", monthly.toFixed(2));
    // console.log("\tSemi-monthly:\t$", semiMonthly.toFixed(2));
    console.log("\tBi-weekly:\t\t$", biWeekly.toFixed(2));
    // console.log("\tweekly:\t\t$", weekly.toFixed(2));
    // console.log("\tday:\t\t$", day.toFixed(2));
    // console.log("\thour:\t\t$", hour.toFixed(2));
    console.log("")
}