abstract class Coffee
{
    Discount : number;

    abstract Price(): number;

    Strength(): string
    {
        return "Mild";
    }

    constructor(discount: number)
    {
        this.Discount= discount;
    }
}