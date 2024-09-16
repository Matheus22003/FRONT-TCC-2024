import {Component, Input} from '@angular/core';
import {NzCardComponent, NzCardMetaComponent} from "ng-zorro-antd/card";
import {CommonModule, NgForOf} from "@angular/common";

@Component({
  selector: 'app-json-viewer',
  standalone: true,
  imports: [
    CommonModule,
    NzCardComponent,
    NzCardMetaComponent,
    NgForOf
  ],
  templateUrl: './json-viewer.component.html',
  styleUrl: './json-viewer.component.scss'
})
export class JsonViewerComponent {
  @Input() jsonData: any;

  // Função para pegar as chaves do JSON
  objectKeys = Object.keys;

  // Função para formatar valores
  public formatValue(value: any): string {
    if (Array.isArray(value)) {
      return value.join(', ');
    } else if (typeof value === 'object') {
      return JSON.stringify(value, null, 2);
    }
    return value.toString();
  }
}
