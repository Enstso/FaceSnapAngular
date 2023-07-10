import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
@Injectable({
  providedIn: 'root'
})


export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {

      id: 1,
      title: 'Python',
      description: 'Langage interprétés',
      image: 'data:image/jpeg;base64,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',
      date: new Date(),
      snaps: 1,
      txtBtn: 'Dislike'

    },

    {
      id: 2,
      title: 'TypeScript',
      description: 'Langage interprétés',
      image: 'data:image/jpeg;base64,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',
      date: new Date(),
      snaps: 90,
      txtBtn: 'Dislike',
      location: 'BX'
    },

    {
      id: 3,
      title: 'Js',
      description: 'Langage interprétés',
      image: 'data:image/jpeg;base64,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',
      date: new Date(),
      snaps: 190,
      txtBtn: 'Dislike',
      location: 'Paris'
    }
  ]

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  
  getFaceSnapById(id: number): FaceSnap{
    const faceSnap= this.faceSnaps.find(faceSnap => faceSnap.id === id);
    if(!faceSnap){
      throw new Error("Le snap n'a pas été trouvé");
    }

    return faceSnap;

  }

  snapById(id: number): void {
    const faceSnap = this.getFaceSnapById(id);
    if (faceSnap) {
      faceSnap.snaps++
    }
    else {
      throw new Error("Le snap n'a pas été trouvé")
    }
  }

  unsnapById(id: number) {
    const faceSnap = this.getFaceSnapById(id)
    if (faceSnap) {
      faceSnap.snaps--
    }
    else{
      throw new Error("Le snap n'a pas été trouvé")
    }
  }


}