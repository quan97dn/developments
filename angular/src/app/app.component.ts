import { Component } from '@angular/core';

import { Title } from "@angular/platform-browser";

import { RouterModule, Routes , Router, ActivatedRoute, NavigationEnd} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
  	'./app.component.css',
  	'../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class AppComponent {

   constructor(titleService:Title, private router:Router, activatedRoute:ActivatedRoute) {
	    router.events.subscribe(event => {
		      if(event instanceof NavigationEnd) {
		        var title = this.getTitle(router.routerState, router.routerState.root).join('-');
		        titleService.setTitle(title);
		      }
	    });
  	}

    getTitle(state, parent) {
    	var data = [];
	    if(parent && parent.snapshot.data && parent.snapshot.data.title) {
	      data.push(parent.snapshot.data.title);
	    }

	    if(state && parent) {
	      data.push(... this.getTitle(state, state.firstChild(parent)));
	    }
	    return data;
    }
    
}
