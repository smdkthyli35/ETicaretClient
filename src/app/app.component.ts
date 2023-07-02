import { Component } from '@angular/core';
import {
  CustomToastrService,
  ToastrMessageType,
  ToastrPosition,
} from './services/ui/custom-toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private toastrService: CustomToastrService) {
    this.toastrService.message('Selam', 'as', {
      messageType: ToastrMessageType.Success,
      position: ToastrPosition.TopLeft,
    });
  }
}
