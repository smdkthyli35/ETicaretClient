import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Observable, firstValueFrom } from 'rxjs';
import { List_Basket_Item } from 'src/app/contracts/baskets/list_basket_item';
import { Create_Basket_Item } from 'src/app/contracts/baskets/create_basket_item';
import { Update_Basket_Item } from 'src/app/contracts/baskets/update_basket_item';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  constructor(private httpClientService: HttpClientService) { }

  async get(): Promise<List_Basket_Item[]> {
    const observable: Observable<List_Basket_Item[]> = this.httpClientService.get({
      controller: "baskets"
    });

    return await firstValueFrom(observable);
  }

  async add(basketItem: Create_Basket_Item, successCallBack?: () => void): Promise<void> {
    const observable: Observable<any> = this.httpClientService.post({
      controller: "baskets"
    }, basketItem);

    await firstValueFrom(observable);
    successCallBack();
  }

  async updateQuantity(basketItem: Update_Basket_Item): Promise<void> {
    const observable: Observable<any> = this.httpClientService.put({
      controller: "baskets"
    }, basketItem);

    await firstValueFrom(observable);
  }

  async remove(basketItemId: string): Promise<void> {
    const observable: Observable<any> = this.httpClientService.delete({
      controller: "baskets"
    }, basketItemId);

    await firstValueFrom(observable);
  }
}
