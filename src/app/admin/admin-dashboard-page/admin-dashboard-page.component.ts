import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-admin-dashboard-page',
    templateUrl: './admin-dashboard-page.component.html',
    styles: [],
    host: {
        class: 'flex flex-col md:flex-row flex-1',
    },
})
export class AdminDashboardPageComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
