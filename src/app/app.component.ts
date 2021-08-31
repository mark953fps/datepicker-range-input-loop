import { Component } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public inputControlArr: any = [
    { startDate: new Date('09/01/2021'), endDate: new Date('09/02/2021') },
    { startDate: new Date('09/03/2021'), endDate: new Date('09/04/2021') },
    { startDate: new Date('09/05/2021'), endDate: new Date('09/06/2021') },
    { startDate: new Date('09/07/2021'), endDate: new Date('09/08/2021') },
    { startDate: new Date('09/09/2021'), endDate: new Date('09/10/2021') }
  ];
}
