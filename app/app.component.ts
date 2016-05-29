import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'dist/app.component.html'
})

export class AppComponent {
	selectedProject: Project;
	projects: Project[];

	constructor() {
		this.projects = [{
			id: 0,
			name: "javascript",
			hours: 10
		}, {
			id: 1,
			name: "testing",
			hours: 20
		}];
	}

	onSelect(project: Project) {
		this.selectedProject = project;
	}

	addHours(project: Project, hours: number){		
		this.selectedProject.hours += +hours;
		console.log(this.selectedProject.hours);
	}
}

export class Project {
	id: number;
	name: string;
	hours: number;
}