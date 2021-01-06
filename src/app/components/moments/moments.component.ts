import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MomentsService, moment } from 'src/app/services/moments.service';

@Component({
  selector: 'app-moments',
  templateUrl: './moments.component.html',
  styleUrls: ['./moments.component.css']
})
export class MomentsComponent implements OnInit {

  constructor( private momentsService: MomentsService,
               private router: Router ) { }

  moments: moment[] = []

  ngOnInit(): void {

    this.moments = this.momentsService.getMoments();

  }

  VerMomento( id:number ){
    this.router.navigate([ 'moments/moment', id ]);
  }


}
