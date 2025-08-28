import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
    constructor(private powerService: PowerService) {}

    compute(a: number, b: number): number {
        console.log("Drawing power for CPU computation...");
        this.powerService.supplyPower(100); // Example wattage
        const result = a + b;
        return result;
    }
}
