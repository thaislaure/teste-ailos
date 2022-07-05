
import { TestBed } from '@angular/core/testing';
import { CpfValidator } from './cpf-validator';
import { FormControl } from '@angular/forms';

describe('CpfValidator', () => {

    let validator: CpfValidator;

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [CpfValidator] });
        validator = TestBed.get(CpfValidator);
    });

    it('create an instance', () => {
        validator = new CpfValidator();
        expect(validator).toBeTruthy();
    });

    it('CPF válido', () => {
        expect(CpfValidator.validate(new FormControl('26459408033'))).toBeNull();
    });

    it('CPF inválido conhecido', () => {
        expect(CpfValidator.validate(new FormControl('99999999999'))).toEqual({ cpfInvalid: true });
    });

    it('CPF inválido', () => {
        expect(CpfValidator.validate(new FormControl('03520683100'))).toEqual({ cpfInvalid: true });
        expect(CpfValidator.validate(new FormControl('78069228967'))).toEqual({ cpfInvalid: true });
    });

});
