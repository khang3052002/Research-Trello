import { HttpStatus } from '@nestjs/common';
import { ApiRespone } from './api-respone.model';

export class SuccessApiRespone extends ApiRespone {
  constructor(status: HttpStatus, message: string, data: any) {
    super(status);
    this.message = message;
    this.status = status;
    this.data = data;
  }
  message: string;
  data: any;
}
