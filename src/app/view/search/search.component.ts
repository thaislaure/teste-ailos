import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Client } from "src/app/model/client";
import { ClientService } from "src/app/service/client.service";
import { CpfValidator } from "src/app/util/validator/cpf-validator";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  client = {} as Client;
  infoForm: FormGroup;
  isClient = false;

  constructor(
    private clientService: ClientService,

    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.infoForm = this.formBuilder.group({
      cpf: new FormControl("", [CpfValidator.validate]),
    });
  }

  public getClients() {
    const cpf = this.infoForm.get("cpf").value;
    if (cpf) {
      this.clientService
        .get()
        .then((client) => {
          this.client = client.find(
            (x) => x.cpf === cpf
          );
          if (this.client) {
            this.isClient = true;
            this.carregarCards();
          } else {
            this.isClient = false;
            //tratar cpf não encontrado
          }

          this.infoForm.patchValue(this.client);
        })
        .catch();
    }
    }


  private carregarCards() {}

  verificaCpfValido(): boolean {
    const cpf = this.infoForm.get("cpf");
    return cpf.invalid && cpf.dirty;
  }
}
