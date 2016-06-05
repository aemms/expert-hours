import { Component, ElementRef } from '@angular/core';
import { NgForm } from 		'@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  host: {
  	'(mouseenter)': 'onMouseEnter()',
  	'(mouseleave)': 'onMouseLeave()'
  }
})

export class AppComponent {
	selectedProject: Project;
	public projects = PROJECTS;
	private el: HTMLElement;

	contructor(el: ElementRef){
		this.el = el.nativeElement;
	}

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

	onMouseEnter(){
		//switch inners of li to show add project
	}

	onMouseLeave(){
		//show normal top bit
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