import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  // A exclamação (!) é uma indicação para o TypeScript de que você está garantindo que a variável será inicializada antes de ser usada,
  //mesmo que o TypeScript não seja capaz de detectar isso. Essa declaração está relacionada à criação de um formulário reativo no Angular.
  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder // O FormBuilder é uma classe do Angular que fornece métodos para criar instâncias de FormGroup. Ele simplifica a criação e gerenciamento de objetos FormGroup para formulários reativos.
    ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({  //é onde o formulário reativo é realmente criado.
      conteudo: ['Formulário reativo'],
      autoria: ['Helton'],
      modelo: ['modelo1']
    })
  }

  criarPensamento(){
    this.service.adicionar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    });
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

}
