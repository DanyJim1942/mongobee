import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { SqlinjectorService, Documento } from './services/sqlinjector.service';
import { Router } from 'express';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'abeja';
  documentos!: Documento[];
  constructor(private sqlinjector: SqlinjectorService){}

  ngOnInit(): void{
    this.obtenerDocumentos();
  }
  
  obtenerDocumentos(){
    this.sqlinjector.obtenerDocumentos().subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }
  
}
