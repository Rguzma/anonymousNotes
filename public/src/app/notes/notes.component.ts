import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  allNotes: any[] = [];
  noteContent: String = "";
  errorMessage: String = "";

  constructor(private _httpService: HttpService) { }

 
  ngOnInit(): void {
    this.loadNotes();
  }

  createNote( event:any): void{
    event.preventDefault();
    console.log("lo que se guardara: ",this.noteContent.length);
    if(this.noteContent.length < 3){
      this.errorMessage = "Note should be at least 3 characters"
    }
    else{
      let newNote = {
        noteContent: this.noteContent
      }
      console.log(newNote);
      this._httpService.postCreateNote(newNote)
        .subscribe((data:any) =>{
          console.log(data);
        })
      location.reload();
    }
  }

  loadNotes():void{
    this._httpService.getNotes()
      .subscribe((data:any) =>{
        console.log("todas las notas: ",data)
        this.allNotes = data;
        console.log(this.allNotes);
      })
  }
}