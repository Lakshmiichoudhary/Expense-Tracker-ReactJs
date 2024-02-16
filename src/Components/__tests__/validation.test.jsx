import Validation from "../Auth/Validation"
import {describe,expect,it} from 'vitest'

describe('Validation function', () => {
    it('returns "all fields are required" when email or password is missing', () => {
        expect(Validation('', 'password', 'password')).toBe('all fields are required');
    });

    it('should return "Enter valid email and password"', () => {
        expect(Validation('laxmi@example.com', 'Lakshmi#2001', 'Lakshmi#2001')).toBe(null)
    })
});