import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {icon} from './shared/icon';
import { DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'metaweather';
  constructor(private matIconReg: MatIconRegistry, private sanitizer: DomSanitizer) {
    icon.forEach((iconelem) => {
    this.matIconReg.addSvgIconInNamespace(iconelem.namespace, iconelem.name, this.sanitizer.bypassSecurityTrustResourceUrl(iconelem.url));
    });
  }
}
