import { Component, OnInit } from '@angular/core';
import { NgForm	} from '@angular/common';

import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
	selector: 'project-list',
	templateUrl: 'app/project-list.component.html'
})

export class ProjectList implements OnInit {
	selectedProject: Project;
	public projects: Project[];
	
	constructor(private projectService: ProjectService){ }
	
	getProjects(){
		this.projectService.getProjects().then(projects => this.projects = projects);
	}

	model = new Project("test", 150);

	onSelect(project: any) {
		this.selectedProject = project;
	}
	
	addHours(project: Project, hours: any, projectnew: any, projectinfo: any) {
		this.selectedProject.hours += +hours.value;
		hours.value = '';
		projectnew.style.display = "none";
		projectinfo.style.display = "block";
	}

	onMouseEnter(event: any) {
		//switch inners of li to show add project	
		event.target.getElementsByClassName("projectinfo")[0].style.display = "none";
		event.target.getElementsByClassName("projectnew")[0].style.display = "block";
	}

	onMouseLeave(event: any) {
		//show normal top bit
		event.target.getElementsByClassName("projectinfo")[0].style.display = "block";
		event.target.getElementsByClassName("projectnew")[0].style.display = "none";
	}
	
	ngOnInit() {
		this.getProjects();
	}
}