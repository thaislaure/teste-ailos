import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  client = {} as Client;
  infoForm: FormGroup;

  constructor(private clientService: ClientService,

      private formBuilder: FormBuilder,) { }

  ngOnInit(): void {

    this.infoForm = this.formBuilder.group({
      'nome': [null],
      'cpf': [null],
      'sexo': [null],
      'status': [true],

      'conta': this.formBuilder.group({
        'codigo': [null],
        'dscEmail': [null],
      })
    });
  }

  public getClients() {

    this.clientService.buscaPorCodigo(1).then(professor => {
          this.client = professor;
          this.infoForm.patchValue(this.client);

        }).catch();
  }

  // chargeClient(codigo: Client) {
  //   if (codigo) {
  //     this.professorService.buscaPorCodigo(codigo)
  //       .then(professor => {
  //         this.professor = professor;
  //         this.professorForm.patchValue(this.professor);

  //       }).catch(erro => this.errorHandle.handle(erro));
  //   }
  // }

}
