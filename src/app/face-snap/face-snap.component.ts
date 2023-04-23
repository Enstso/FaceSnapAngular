import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  title!: string;
  description!: string;
  date!: Date;
  snaps!: number;
  image!: string;
  txtBtn!: string;

  ngOnInit(): void {
    

  }

}
