import { AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems);
  }
}
