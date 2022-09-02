import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    });

    const fetchData = async () => {
        setState({ ...state, loading: true });
        try {
            const response = await fetch(url);
            const data = await response.json();
            setState({ data, loading: false, error: null });
            return data;
        } catch (error) {
            setState({ data: null, loading: false, error });
        }
    };

    useEffect(() => fetchData, [url]);

    return state;
};
