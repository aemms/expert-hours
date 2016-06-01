import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'dist/app.component.html'
})

export class AppComponent {
	selectedProject: Project;
	projects = PROJECTS;

	onSelect(project: Project) {
		this.selectedProject = project;
	}

	addHours(project: Project, hours){
		this.selectedProject.hours += +hours.value;
		hours.value = '';
	}

	addProject(name: string, hours: number){
		this.projects.push({ name, hours });
	}
}g

export class Project {
	name: string;
	hours: number;
}

var PROJECTS: Project[] = [
	{ "name": "angular", hours: 10 },
	{ "name": "testing", hours: 20 }
];