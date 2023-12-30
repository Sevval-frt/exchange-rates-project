class UI
{
    constructor(firstSelect,secondSelect)
    {
        this.fSelect=firstSelect;
        this.sSelect=secondSelect;

        this.outputFirst=document.querySelector("#outputFirst");
        this.outputSecond=document.querySelector("#outputSecond");
        this.outputResult=document.querySelector("#outputResult");
    };

    changeFirst()
    {
        this.outputFirst.textContent= this.fSelect.options[this.fSelect.selectedIndex].textContent;
    };

    changeSecond()
    {
        this.outputSecond.textContent=this.sSelect.options[this.sSelect.selectedIndex].textContent;

    };

    displayResult(endResult)
    {
        this.outputResult.value=endResult;
    }

}