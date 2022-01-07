import {
    EnterpriseCustomerProtocol,
    IndividualCustomerProtocol,
    OrderCustomer, 
    PremiumCustomerProtocol
} from  './interface/customer-protocol';

export class IndividualCustomer implements IndividualCustomerProtocol, OrderCustomer {

  constructor (
    public firstName: string, 
    public lastName: string,
    public cpf: string
  ){}

  getName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  getIDN(): string {
    return this.cpf;
  }
}


export class EnterpriseCustomer implements EnterpriseCustomerProtocol, OrderCustomer {
  
    constructor(public name: string, public cnpj: string) {
      this.name = name;
      this.cnpj = cnpj;
    }
  
    getName(): string {
      return this.name;
    }
  
    getIDN(): string {
      return this.cnpj;
    }
}

export class PremiumCustomer implements PremiumCustomerProtocol, OrderCustomer {

  constructor(public IdPremium:string ,public name: string) {
    this.IdPremium = IdPremium,
    this.name = name
  };

  getName(): string {
    return this.name;
  }

  getIDN(): string {
    return this.IdPremium;
  }
}