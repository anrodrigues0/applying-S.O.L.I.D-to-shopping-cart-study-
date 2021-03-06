export interface OrderCustomer {
    getName: () => string;
    getIDN: () =>  string;
}

export interface IndividualCustomerProtocol {
    firstName: string;
    lastName: string;
    cpf: string;
};

export interface EnterpriseCustomerProtocol {
    name: string;
    cnpj: string;
};

export interface PremiumCustomerProtocol {
    IdPremium:string;
    name:string;
}