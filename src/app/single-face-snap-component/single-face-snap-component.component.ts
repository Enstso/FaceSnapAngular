import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-single-face-snap-component',
  templateUrl: './single-face-snap-component.component.html',
  styleUrls: ['./single-face-snap-component.component.scss']
})
export class SingleFaceSnapComponentComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private facesnapservice: FaceSnapsService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.facesnapservice.getFaceSnapById(snapId);
    
  }

  onLike() {

    if (this.faceSnap.txtBtn === 'Dislike') {
        this.faceSnap.txtBtn = 'Like';
        this.faceSnap.snaps--;
    } else {
        this.faceSnap.txtBtn = 'Dislike';
        this.facesnapservice.snapById(this.faceSnap.id);
    }
}

onFaceSnaps(){
  this.router.navigateByUrl('/facesnaps');
}

 
}
