import { Component, OnInit } from '@angular/core';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  constructor(public globalvar: GlobalvarService) { 
    this.list_note = this.globalvar.getNotes()
  }

  ngOnInit() {
  }

  list_note = []
  judul = "";
  isi = "";
  tanggal = "";

  add(){
    var a = {"judul": this.judul, "isi": this.isi, "tanggal": this.tanggal, "favorite": false}
    this.list_note.push(a)
  }


  
}
