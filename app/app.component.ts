import { Component } from '@angular/core';
import { NgForm } from 		'@angular/common';

import { ProjectList } from './project-list.component';
import { Project } from './project';
import { PROJECTS } from './mock-projects';

@Component({
  selector: 'my-app',
  directives: [ProjectList],
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
	public projects = PROJECTS;

	addProject(project: any): void{
		this.projects.push({name: project.name, hours: +project.hours});
		project.name = '';
		project.hours = 0;
	}
}
