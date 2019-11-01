import { Component, Output, EventEmitter, Input } from '@angular/core';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent{

    @Input() isVisible = true;
    @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();

    

    // showModal(): void {
    //     this.isVisible = true;
    //   }

    handleOk(): void {
        console.log('Button ok clicked!');
        this.isVisible = false;
    }
    
    handleCancel(): void {
        console.log('Button cancel clicked!');
        this.isVisible = false;
    }
}