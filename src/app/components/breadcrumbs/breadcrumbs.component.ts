import { Component } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  titulo: string;
  public tituloSubs$: Subscription;

  constructor(
    private _router: Router
  ) {
    this.tituloSubs$ = this.geDataRuta().subscribe(({ title }) => {
      this.titulo = title;
      document.title = `ATU - ${title}`
    });
  }

  ngOnInit(): void {

  }
  
  geDataRuta() {
    return this._router.events.pipe(
      filter(evet => evet instanceof ActivationEnd),
      filter((evet: ActivationEnd) => evet.snapshot.firstChild === null),
      map((evet: ActivationEnd) => evet.snapshot.data)
    );
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }
}
