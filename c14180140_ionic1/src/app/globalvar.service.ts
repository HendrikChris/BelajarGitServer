import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalvarService {

  private notes = [];
  constructor() { }

  public addNote(note){
      this.notes.push(note)
  }

  public getNotes(){
    return this.notes
  }
  
}
