import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getNotes(){
    console.log("hola")
    return this._http.get('http://localhost:8080/notes');
 };
 getANote(_id:any){
  console.log("soy getANotes: ",_id.id)
 return this._http.get(`http://localhost:8080/notes/${_id.id}`);
 
}

postCreateNote(newNote:any){
  console.log("info que se guardara: ",newNote.noteName)
return this._http.post('http://localhost:8080/notes', newNote);
};
putUpdateNote(_id: any, updatedNotes:any){
return this._http.put(`http://localhost:8080/notes/${_id.id}`, updatedNotes);
};
deleteNote(_id: object){
return this._http.delete(`http://localhost:8080/notes/${_id}`, _id);
};

}
