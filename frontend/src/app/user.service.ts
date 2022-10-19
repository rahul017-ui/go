import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  ROOT_URL:string=environment.URL

 

constructor(private http:HttpClient){ }


// login(){
//   return this.http.get<any>(`${this.ROOT_URL}`);
// }

document(user:any){
  return this.http.post<any>(`${this.ROOT_URL}/fileupload`,user,{reportProgress:true,observe:"events"});
}

multidocument(user:any){
  return this.http.post<any>(`${this.ROOT_URL}/fileupload`,user,{reportProgress:true,observe:"events"});


}
getdocument(){
  return this.http.get<any>(`${this.ROOT_URL}/getfile`)
}


downloadFile(file:String){
  var body = {filename:file};

  return this.http.post(`${this.ROOT_URL}/download`,body,{
      responseType : 'blob',
      headers:new HttpHeaders().append('Content-Type','application/json')
  });
}



}
