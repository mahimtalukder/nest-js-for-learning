import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';


@Injectable()
export class DiskService {
    constructor(private powerService: PowerService) {}

    readData(): string {
        console.log("Drawing power for Disk operation...");
        this.powerService.supplyPower(50);
        return "Reading data from disk...";
    }
}
