import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/service/client.service';
import { CpfValidator } from 'src/app/util/validator/cpf-validator';


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
      'cpf': [null, CpfValidator.validate]
    });
  }

  public getClients() {

    this.clientService.getById(this.infoForm.get('cpf').value).then(client => {
          this.client = client;
        this.carregarCards();
          this.infoForm.patchValue(this.client);
        }).catch();
        //tratar cpf não encontrado
  }

  private carregarCards(){

  }

  verificaCpfValido(): boolean {
    const cpf = this.infoForm.get('cpf');
    return (cpf.invalid && cpf.dirty);
  }

}
