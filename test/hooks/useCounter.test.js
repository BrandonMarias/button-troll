import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("test on useCounter hook", () => {
    test("should return default values", () => {
        const { result } = renderHook(() => useCounter());
        const { count, increment, decrement, reset } = result.current;
        expect(count).toBe(0);
        expect(typeof increment).toBe("function");
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test("should return initial value", () => {
        const { result } = renderHook(() => useCounter(100));
        const { count } = result.current;
        expect(count).toBe(100);
    });

    test("should increment", () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;
        act(() => {
            increment(2);
            increment();
        });
        const { count } = result.current;
        expect(count).toBe(103);
    });

    test("should decrement", () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;
        act(() => {
            decrement(2);
            decrement();
        });
        const { count } = result.current;
        expect(count).toBe(97);
    });

    test("should reset", () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment, reset } = result.current;
        act(() => {
            increment(2);
            reset();
        });
        const { count } = result.current;
        expect(count).toBe(100);
    });

});
