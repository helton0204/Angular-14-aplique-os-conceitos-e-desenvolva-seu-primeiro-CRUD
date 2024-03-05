import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {
  //o decorator @Input serve para receber informações que serão passadas pelo componente pai para esse componente (app-pensamento)
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
}

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  larguraPensamento(): String {
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  editar(){
    this.router.navigate([`/pensamentos/editarPensamento/${this.pensamento.id}`])
  }

  excluir(){
    this.router.navigate([`/pensamentos/excluirPensamento/${this.pensamento.id}`])
  }

}
