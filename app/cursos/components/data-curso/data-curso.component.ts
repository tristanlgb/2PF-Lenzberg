import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-curso',
  templateUrl: './data-curso.component.html',
  styleUrls: ['./data-curso.component.css']
})
export class DataCursoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((parametros) => {

    })
  }
  }

