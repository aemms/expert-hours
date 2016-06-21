import { Injectable } from '@angular/core';

import { PROJECTS } from './mock-projects';

@Injectable()
export class ProjectService {
    getProjects(){
        return PROJECTS;
    }
}