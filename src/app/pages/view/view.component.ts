import {Component, OnInit} from '@angular/core';
import {JsonViewerComponent} from "../../components/json-viewer/json-viewer.component";

@Component({
  selector: 'app-view',
  standalone: true,
  templateUrl: './view.component.html',
  imports: [
    JsonViewerComponent
  ],
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

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

  constructor() {
  }

  ngOnInit() {
  }

}
