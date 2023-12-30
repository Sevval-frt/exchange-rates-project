class Currency
{
    constructor(fcurrency,scurrency)
    {
        this.url="https://api.exchangerate.host/latest?base=";
        this.fcurrency=fcurrency;
        this.scurrency=scurrency;
        //Her Event oluştuğu zaman değişeceği için ilk başta NULL!
        this.amount=null;
    };

    exchange()
    { 
        return new Promise((resolve,reject)=>
        {
         fetch(this.url+this.fcurrency).then(response=>response.json).
          then(data=>
          {
           const parity=data["rates"][this.scurrency];
           const amount2=Number(this.amount);
           let total= parity*amount2;
           resolve(total);
          }).
          catch(err=>reject(err));
        });
    };

    changeAmount(amount)
    {
        this.amount=amount;
    };
    changeFirstCurrency(firstcurrency)
    {   
        this.fcurrency=firstcurrency;
    };
    changeSecondCurrency(secondcurrency)
    {
        this.scurrency=secondcurrency;
    };
}
/*NOT: "Exchange Api" adresinden , birinci girilen para birimine göre "GET request" kullanarak gelen veriler ile,
ikinci girilen parabirimi ve miktarla işlem yapılır.*/