import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { retry } from 'rxjs';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  // onDeleteCharacter(index:number):void{
  //   //TODO: Emitir el ID del personaje
  //   this.onDelete.emit(index);
  // }

  onDeleteCharacter( id?: string): void {
    if ( !id ) return;
    this.onDelete.emit(id);
  }

}
