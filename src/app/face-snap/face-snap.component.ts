import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  
  
  constructor( private router: Router) {

  }

  ngOnInit(): void {
    

  }

  onView(){
    this.router.navigateByUrl('facesnaps/'+this.faceSnap.id);
  }
  
  
}

