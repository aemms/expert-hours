import { Component } from '@angular/core';
import { NgForm } from 		'@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
	selectedProject: Project;
	public projects = PROJECTS;

	model = new Project("test", 150);

	onSelect(project: any){
		this.selectedProject = project;
	}

	addHours(project: Project, hours){
		this.selectedProject.hours += +hours.value;
		hours.value = '';
	}

	addProject(project: any): void{
		this.projects.push({name: project.name, hours: +project.hours});
	}
}

export class Project {
	constructor(
		public name: string,
		public hours: number){
	}
}

var PROJECTS: Project[] = [
	{ "name": "angular", hours: 10 },
	{ "name": "testing", hours: 20 }
];