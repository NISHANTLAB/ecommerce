import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  fetching=false;
  
  
  editMode:boolean=false;
    editIndex!: number;
  
  products=[
  {id:'p1',name:'lenevo laptop'},
  {id:'p2',name:'dell laptop'},
  {id:'p3',name:'hp laptop'},
  {id:'p4',name:'apple laptop'}
  ]
  
  
  
onAddproduct(id:any,name:any){
    this.products.push({
id:id.value,
name:name.value,

    })
  }
  
    onDeleteproduct(id:any){
  
       this.products.splice(id,1);
       }

  }
  






