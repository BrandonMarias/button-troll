import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('test on useForm hook', () => {
    const initialForm = {
        name: 'Brandon',
        email: 'brandon@google.com',
    };
    
    test('should return a default form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            formState: initialForm,
            name: 'Brandon',
            email: 'brandon@google.com',
            handleChange: expect.any(Function),
            resetForm: expect.any(Function),
        });
    });

    test('should change the value of the form (change name)', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const {handleChange} = result.current;
        act(() => {
            handleChange({
                target: {
                    name: 'name',
                    value: 'kevin',
                },
            });
        });
        const {formState} = result.current;
        expect(formState).toEqual({ ...initialForm, name: 'kevin' });
    });


    test('should reset the form with reset()', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const {handleChange, resetForm} = result.current;
        act(() => {
            handleChange({
                target: {
                    name: 'name',
                    value: 'Brandon',
                },
            });
            resetForm();
        });
        const {formState} = result.current;
        expect(formState).toEqual(initialForm);
    });
});