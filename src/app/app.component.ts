import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { SqlinjectorService, Documento } from './sqlinjector.service';
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
  constructor(private SqlinjectorService: SqlinjectorService, private router: Router, private activateRoute: ActivatedRoute){}


  this.SqlinjectorService.obtenerDocumentos().subscribe()(
    res=>{
      console.log(res)
      this.documentos=<any>res;
    },
    err=>console.log(err)
  )
  
}
