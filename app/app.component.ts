import { Component, ElementRef } from '@angular/core';
import { NgForm } from 		'@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
	selectedProject: Project;
	public projects = PROJECTS;
	hovering = false;

	model = new Project("test", 150, false);

	onSelect(project: any){
		this.selectedProject = project;
	}

	addHours(project: Project, hours){
		this.selectedProject.hours += +hours.value;
		hours.value = '';
	}

	addProject(project: any): void{
		this.projects.push({name: project.name, hours: +project.hours, hovering: false});
	}

	onMouseEnter(project: any){
		//switch inners of li to show add project
		project.hovering=true;
	}

	onMouseLeave(project: any){
		//show normal top bit
		project.hovering=false;
	}
}

export class Project {
	constructor(
		public name: string,
		public hours: number,
		public hovering: boolean){
	}
}

var PROJECTS: Project[] = [
	{ "name": "angular", hours: 10, hovering: false },
	{ "name": "testing", hours: 20, hovering: false}
];