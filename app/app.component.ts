import { Component, ElementRef } from '@angular/core';
import { NgForm } from 		'@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
	selectedProject: Project;
	public projects = PROJECTS;

	model = new Project("test", 150, false);

	onSelect(project: any){
		this.selectedProject = project;
	}

	addHours(project: Project, hours: any, projectnew: any, projectinfo: any){
		this.selectedProject.hours += +hours.value;
		hours.value = '';
		console.log(projectinfo);
		projectnew.style.display = "none";
		projectinfo.style.display = "block";
	}

	addProject(project: any): void{
		this.projects.push({name: project.name, hours: +project.hours, hovering: false});
	}

	onMouseEnter(event: any){
		//switch inners of li to show add project
		console.log(event);
		event.target.firstElementChild.style.display = "none";
		event.target.lastElementChild.style.display = "block";
	}

	onMouseLeave(event: any){
		//show normal top bit
		event.target.firstElementChild.style.display = "block";
		event.target.lastElementChild.style.display = "none";
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