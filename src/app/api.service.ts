import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  users =[]
  path = 'http://localhost:3000';
    constructor(private http:HttpClient) { }
    
    getUsers()
    {
      this.http.get<any>(this.path+'/users').subscribe(res=>{
      this.users = res;
        
      })
    }
    getProfile(id)
    {
     return this.http.get(this.path+'/profile/'+id)
    }
  
  
}
