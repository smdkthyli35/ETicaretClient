import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { User } from 'src/app/entities/user';
import { Create_User } from 'src/app/contracts/users/create_user';
import { Observable, firstValueFrom } from 'rxjs';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../ui/custom-toastr.service';
import { TokenResponse } from 'src/app/contracts/token/tokenResponse';
import { SocialUser } from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClientService: HttpClientService, private toastrService: CustomToastrService) { }

  async create(user: User): Promise<Create_User> {
    const observable: Observable<Create_User | User> = this.httpClientService.post<Create_User | User>({
      controller: "users"
    }, user);

    return await firstValueFrom(observable) as Create_User;
  }

  async updatePassword(userId: string, resetToken: string, password: string, passwordConfirm: string, successCallBack?: () => void, errorCallBack?: (error) => void) {
    const observable: Observable<any> = this.httpClientService.post({
      action: "reset-password",
      controller: "users"
    }, { userId: userId, resetToken: resetToken, password: password, passwordConfirm: passwordConfirm });

    const promiseData: Promise<any> = await firstValueFrom(observable);

    promiseData
      .then(value => successCallBack())
      .catch(error => errorCallBack(error));

    await promiseData;
  }
}


