import {InMemoryDbService, RequestInfo} from "angular-in-memory-web-api";
import {Observable} from "rxjs";

export class InMemoryDatabase implements InMemoryDbService{
  createDb(){
    const categories = [
      {id: 1, name: 'Moradia', description: 'Pagamentos de contas da casa'},
      {id: 2, name: 'Saúde', description: 'Plano de saúde e remédios'},
      {id: 3, name: 'Lazer', description: 'Cinema, parques, praia, etc'},
      {id: 4, name: 'Salário', description: 'Recebimento do salário'},
      {id: 5, name: 'Freelas', description: 'Trabalhos como freelancer'}
    ];
    return {categories};
  }
}
