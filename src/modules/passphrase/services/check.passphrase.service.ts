import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import * as crypto from 'crypto'
import { PassphraseEntity } from '../domain/passphrase.entity';
import { ICreatePassphraseService } from '../interfaces/services/create.passphrase.service.interface';
import { ICheckPassphraseService } from '../interfaces/services/check.passphrase.service.interface';


@Injectable()
export class CheckPassphraseService implements ICheckPassphraseService{

  constructor(
    @InjectRepository(PassphraseEntity)
    private readonly passphraseRepo: Repository<PassphraseEntity>,
  ) {}

  async execute (passphrase: string) {
    
    const entity = await this.passphraseRepo.findOne({ where: {
        code: passphrase,
    }})
    
    return !!(entity.usedBy)
  }
}