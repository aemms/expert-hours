import { Component, OnInit } from '@angular/core';
import { NgForm } from 		'@angular/common';

import { ProjectService } from './project.service';

import { ProjectList } from './project-list.component';
import { Project } from './project';

@Component({
  selector: 'my-app',
  directives: [ProjectList],
  templateUrl: 'app/app.component.html',
  providers: [ProjectService]
})

export class AppComponent { }
