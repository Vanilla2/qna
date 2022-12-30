import React from 'react'
import { useRouteError } from 'react-router';

export interface Props {
    [key: string]: any
}

const ErrorPage = (props: Props) => {
    let error = useRouteError() as any;
    console.error(error);

    return (
        <div>
            <>
            Pizdec, Eroare
            <br></br>
            {error.data}
            </>
        </div>
    );
}

export default ErrorPage;