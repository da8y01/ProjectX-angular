import { Component, Input } from '@angular/core';
import { HeaderComponent, FooterComponent } from '@projectx/ui';

@Component({
  imports: [HeaderComponent, FooterComponent],
  selector: 'webapp-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.css'],
  standalone: true,
})
export class LayoutContainerComponent {
  @Input() title?: string;

  navigationLinks = [
    {
      label: 'ProjectX on Facebook',
      href: 'https://facebook.com/projectx',
      icon: 'ionLogoFacebook',
    },
    {
      label: 'ProjectX on Instagram',
      href: 'https://instagram.com/projectx',
      icon: 'ionLogoInstagram',
    },
    {
      label: 'ProjectX on GitHub',
      href: 'https://github.com/projectx',
      icon: 'ionLogoGithub',
    },
  ];
}
