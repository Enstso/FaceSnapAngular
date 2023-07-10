import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  id!: number;
  title!: string;
  description!: string;
  date!: Date;
  snaps!: number;
  image!: string;
  txtBtn!: string;

  constructor(private faceSnapService : FaceSnapsService){

  }
 
  ngOnInit(): void {
    

  }
  onLike() {

    if (this.faceSnap.txtBtn === 'Dislike') {
        this.faceSnap.txtBtn = 'Like';
        this.faceSnap.snaps--;
    } else {
        this.faceSnap.txtBtn = 'Dislike';
        this.faceSnapService.snapById(this.faceSnap.id);
    }
}
}
