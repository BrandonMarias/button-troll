import { useFetch, useCounter } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
    const { count, increment, decrement, reset } = useCounter(1);
    const { data, error, loading } = useFetch(
        "https://www.breakingbadapi.com/api/quotes/" + count
    );


    const { quote, author } = !!data && data[0];

    return (
        <>
            <h1>Braking bad quotes</h1>
            <hr />

            {loading ? (
                <LoadingQuote />
            ) : (
                <Quote quote={quote} author={author} />
            )}

            <button
                className="btn btn-primary"
                onClick={() => increment()}
                disabled={loading || count === 30}
            >
                Next quote
            </button>
            <button
                className="btn btn-danger"
                onClick={() => decrement()}
                disabled={loading || count === 1}
            >
                Previos Quote
            </button>
        </>
    );
};
