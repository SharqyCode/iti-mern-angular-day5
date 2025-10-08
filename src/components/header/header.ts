import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DirLog } from "../../directives/dir-log";

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, DirLog],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  
}
