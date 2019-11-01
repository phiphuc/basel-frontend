import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
export class Navbar {
    private id: string;
    private name: string;
    private isActive: boolean;
    
    constructor(id: string, name: string, isActive: boolean){
        this.id = id;
        this.name = name;
        this.isActive = isActive;
    }

    _set(id: string, name: string){
        this.id = id;
        this.name = name;
    }

    _setId(id:string){
        this.id = id;
    }

    _setName(name: string){
        this.name = name
    }

    _getId(){
        return this.id
    }

    _getName(){
        return this.name
    }

    _getIsActive(){
        return this.isActive
    }





}