import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { Client } from "../model/client";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  url = "http://localhost:3000/clientes"; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) {}

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  // Obtem todos os carros
  get(): Promise<Client[]> {
    return this.httpClient.get(`${this.url}`)
    .toPromise()
    .then(response => {
      const client = response as Client[];
      return client;
    });
    // return this.httpClient
    //   .get<Client[]>(this.url)
    //   .pipe(retry(2), catchError(this.handleError));
  }


  getById(codigo: number) {
    return this.httpClient.get(`${this.url}/${codigo}`)
      .toPromise()
      .then(response => {
        const client = response as Client;
        return client;
      });
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
