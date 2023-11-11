import { HttpStatus } from '@nestjs/common';

export class ApiRespone {
  constructor(status: HttpStatus) {
    this.status = status;
  }
  public status: HttpStatus;
}
