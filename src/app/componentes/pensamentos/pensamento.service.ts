import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

//Esse decorator @Injectable indica ao Angular que essa classe é injetável e pode ser utilizada em outras classes.
@Injectable({
  providedIn: 'root' //'root', significa que esse serviço é visível para toda a aplicação e você pode injetá-lo em qualquer lugar do seu projeto.
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  //A injeção de dependências no Angular acontece via construtor onde especificamos um parâmetro com o tipo da dependência e ao,
  //colocar o modificador de acesso private, fazemos com que esse atributo seja automaticamente declarado como atributo dessa classe.
  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(this.API)
  }

  adicionar(pensamento: Pensamento): Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  editar(pensamento: Pensamento): Observable<Pensamento>{
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

  excluir(pensamentoId: Number): Observable<Pensamento>{
    const url = `${this.API}/${pensamentoId}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(pensamentoId: Number): Observable<Pensamento>{
    const url = `${this.API}/${pensamentoId}`
    return this.http.get<Pensamento>(url)
  }
}
