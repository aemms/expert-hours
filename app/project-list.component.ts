import { Component } from '@angular/core';

import { Project } from './project';
import { PROJECTS } from './mock-projects';

@Component({
	selector: 'project-list',
	templateUrl: 'app/project-list.component.html'
})

export class ProjectList {
	selectedProject: Project;
	public projects = PROJECTS;

	model = new Project("test", 150);

	onSelect(project: any) {
		this.selectedProject = project;
	}
	
	addHours(project: Project, hours: any, projectnew: any, projectinfo: any) {
		this.selectedProject.hours += +hours.value;
		hours.value = '';
		console.log(projectinfo);
		projectnew.style.display = "none";
		projectinfo.style.display = "block";
	}

	onMouseEnter(event: any) {
		//switch inners of li to show add project
		console.log(event);
		event.target.firstElementChild.style.display = "none";
		event.target.lastElementChild.style.display = "block";
	}

	onMouseLeave(event: any) {
		//show normal top bit
		event.target.firstElementChild.style.display = "block";
		event.target.lastElementChild.style.display = "none";
	}
}