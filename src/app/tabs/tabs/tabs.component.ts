import {Component, OnInit, QueryList, ContentChildren, AfterContentInit} from '@angular/core';
import {TabComponent} from "../tab/tab.component";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit  {

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.select(this.tabs.first)
  }

  //addTab(tab: TabComponent) {
  //  this.tabs.push(tab);
  //  if (this.tabs.length === 1) {
  //    this.select(tab);
  //  }
 // }

  select(tab: TabComponent){
    this.tabs.forEach(tab => tab.selected = false);
    tab.selected = true;
  }
}
