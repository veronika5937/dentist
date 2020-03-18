import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, distinctUntilChanged, auditTime } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  isScrolled$: Observable<boolean>;
  constructor() { }

  ngOnInit() {
    this.isScrolled$ = fromEvent(window, 'scroll')
      .pipe(
        auditTime(200),
        map(_ => window.scrollY > 100),
        distinctUntilChanged()
      );
  }
}
