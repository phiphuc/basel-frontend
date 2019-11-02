import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rawdata',
  templateUrl: './rawdata.component.html',
  styleUrls: ['./rawdata.component.css']
})
export class RawdataComponent implements OnInit {

  isVisible = false;
  searchValue: string;
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.listOfAllData.push({
        id: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`
      });
    }
  }

  optionList = [{ label: 'Lucy', value: 'lucy', age: 20 }, { label: 'Jack', value: 'jack', age: 22 }];
  selectedValue = { label: 'Jack', value: 'jack', age: 22 };
  compareFn = (o1: any, o2: any) => (o1 && o2 ? o1.value === o2.value : o1 === o2);

  log(value: { label: string; value: string; age: number }): void {
    console.log(value);
  }

  showModal(): void {
        this.isVisible = true;
      }

  handleOk(): void {
      console.log('Button ok clicked!');
      this.isVisible = false;
  }
  
  handleCancel(): void {
      console.log('Button cancel clicked!');
      this.isVisible = false;
  }

  //table
  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.checkAll(true);
      }
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfDisplayData.forEach((data, index) => (this.mapOfCheckedId[data.id] = index % 2 !== 0));
        this.refreshStatus();
      }
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfDisplayData.forEach((data, index) => (this.mapOfCheckedId[data.id] = index % 2 === 0));
        this.refreshStatus();
      }
    }
  ];
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  listOfDisplayData: ItemData[] = [];
  listOfAllData: ItemData[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};

  currentPageDataChange($event: ItemData[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

}
