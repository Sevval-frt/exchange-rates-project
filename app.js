const amountinput=document.querySelector("#amount");
const firstCurrency=document.querySelector("#firstCurrency");
const secondCurrency=document.querySelector("#secondCurrency");

const curreny=new Currency("USD","TRY");
const ui=new UI(firstCurrency,secondCurrency);

allEventListeners();

function allEventListeners()
{
    amountinput.addEventListener("input",amountExchange);
    firstCurrency.onchange=function()
    {
        curreny.changeFirstCurrency(firstCurrency.options[firstCurrency.selectedIndex].textContent);
        ui.changeFirst();
    };
    secondCurrency.onchange=function()
    {
        curreny.changeSecondCurrency(secondCurrency.options[secondCurrency.selectedIndex].textContent);
        ui.changeSecond();
    };
};


function amountExchange()
{
    curreny.changeAmount(amountinput.value);

    curreny.exchange().then(result=>ui.displayResult(result)).
    catch(error=>console.error(error));
};



