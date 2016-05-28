import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'dist/app.component.html'
})

export class AppComponent {
	project: Project;
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

	addHours(project: Project, hours: number){		
		console.log(project.hours + " \n " + hours);
		this.projects[project.id].hours += hours;
	}
}

export class Project {
	id: number;
	name: string;
	hours: number;
}