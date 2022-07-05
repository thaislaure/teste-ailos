import { AbstractControl } from '@angular/forms';

export class CpfValidator {

    static validate(control: AbstractControl): { [p: string]: any } {

        const cpf = control.value ? control.value.replace(/[^\d]+/g, '') : '';

        const invalid = { cpfInvalid: true };

        // Elimina CPFs invalidos conhecidos
        if (!cpf || cpf === undefined || cpf.length !== 11 ||
            cpf === '00000000000' ||
            cpf === '11111111111' ||
            cpf === '22222222222' ||
            cpf === '33333333333' ||
            cpf === '44444444444' ||
            cpf === '55555555555' ||
            cpf === '66666666666' ||
            cpf === '77777777777' ||
            cpf === '88888888888' ||
            cpf === '99999999999') {
            return invalid;
        }

        // Valida 1o digito
        let add = 0;
        for (let i = 0; i < 9; i++) {
            // tslint:disable-next-line: radix
            add += parseInt(cpf.charAt(i)) * (10 - i);
        }

        let rev = 11 - (add % 11);

        if (rev === 10 || rev === 11) {
            rev = 0;
        }

        // tslint:disable-next-line: radix
        if (rev !== parseInt(cpf.charAt(9))) {
            return invalid;
        }

        // Valida 2o digito
        add = 0;

        for (let x = 0; x < 10; x++) {
            // tslint:disable-next-line: radix
            add += parseInt(cpf.charAt(x)) * (11 - x);
        }

        rev = 11 - (add % 11);

        if (rev === 10 || rev === 11) {
            rev = 0;
        }

        // tslint:disable-next-line: radix
        if (rev !== parseInt(cpf.charAt(10))) {
            return invalid;
        }

        return null;
    }
}
