import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cpfPipe' })
export class CPFPipe implements PipeTransform {

    transform(cpf) {
        if (cpf) {
            return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '\$1.\$2.\$3\-\$4');
        }
        return cpf;
    }
}
