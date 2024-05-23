import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SqlinjectorService {

  constructor(private http: HttpClient) { }

  obtenerDocumentos(){
    return this.http.get("/api/tarjeta");

  }
  obtenerDocumentoPorId(id:string){
    return this.http.get("/api/tarjeta/"+id);

  }
  modificarDocumento(documento:Documento){
    return this.http.post("/api/tarjeta",documento);

  }
  eliminarDocumento(id:string){
    return this.http.delete("/api/tarjeta/"+id);

  }
  crearDocumento(documento:Documento){
    return this.http.put("/api/tarjeta",documento);

  }
}


export interface Documento{
  id?: string;
}