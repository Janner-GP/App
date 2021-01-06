import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MomentsService, moment } from 'src/app/services/moments.service';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {

  moment: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private momentsService: MomentsService,
               private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params=> {
    this.moment = this.momentsService.getMoment( params['id'] );
    })
  }

  Volver(){
    this.router.navigate(['moments']);
  }

}
