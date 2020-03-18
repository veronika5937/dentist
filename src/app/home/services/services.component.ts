import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SERVICES_DATA } from './services.config';
import { trackByFn } from '../../shared';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent implements OnInit {
  trackByFn = trackByFn;
  services = SERVICES_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
