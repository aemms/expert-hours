import { Component, OnInit } from '@angular/core';
import { NgForm } from 		'@angular/common';

import { ProjectService } from './project.service';

import { ProjectList } from './project-list.component';
import { ProjectNew } from './project-new.component';
import { Project } from './project';

@Component({
  selector: 'my-app',
  directives: [ProjectList, ProjectNew],
  templateUrl: 'app/app.component.html',
  providers: [ProjectService]
})

export class AppComponent { }
