import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Client } from "../model/client";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ClientService {

  url = `${environment.baseUrl}/clientes`; // api rest fake

  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

// O correto seria retornar um objeto apenas, mas devido o json server retornar um array, deixei recebendo um array
  buscaPorCpf(cpf: string): Observable<[Client]> {
    let params = new HttpParams();
    params = params.set('cpf', cpf);
    return this.httpClient
      .get<[Client]>(this.url, { params })
      .pipe(catchError(this.handleError));
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
