import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Client } from "src/app/model/client";
import { ClientService } from "src/app/service/client.service";
import { ValidadorCPF } from "src/app/util/validator/cpf-validator";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  client: Client;
  infoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.contruirFomrulario();
  }

  private contruirFomrulario() {
    this.infoForm = this.formBuilder.group({
      cpf: [null, [Validators.required, ValidadorCPF.validate]],
    });
  }

  public getClient() {
    if (this.infoForm.valid) {
      this.cpf?.value.replace(".", "").replace("-", "");
      this.clientService.buscaPorCpf(this.cpf?.value).subscribe((client) => {
        this.client = client[0];
      });
    }
  }

  public verificaCpfValido(): boolean {
    const cpf = this.cpf;
    return cpf?.invalid && cpf?.dirty;
  }

  get cpf(): AbstractControl | null {
    return this.infoForm.get("cpf");
  }
}
