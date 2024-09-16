import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {JsonViewerComponent} from "./components/json-viewer/json-viewer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, JsonViewerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  jsonData = {
    name: "John Doe",
    age: 30,
    city: "New York",
    profession: "Software Developer",
    skills: ["Angular", "TypeScript", "JavaScript"],
    experience: {
      company: "Tech Corp",
      years: 5,
      position: "Senior Developer"
    }
  };

  isCollapsed = false;
}
