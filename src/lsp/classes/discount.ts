export abstract class Discout {
    protected discount = 0
    calculate(price: number): number {
        return  price - price * this.discount       
    }
};

export class TenPorcentDiscount extends Discout{
    protected readonly discount = 0.1
};
