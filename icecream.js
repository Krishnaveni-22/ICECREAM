//creating object for flavours.
const flavour={
    flavour1:"vannila", flavour2:"chocolate", flavour3:"strawberry"};
//prices for each flavours.
const price={1:100,2:200,3:150};
//adding more the flavours
flavour[4]="butterscotch";
flavour[2]="darkchocolate";
//printing Entire flavours
console.log(flavour)
//Counting the number of flavours
const count=Object.keys(flavour).length;
console.log(count)