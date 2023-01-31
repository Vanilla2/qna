import React from 'react'
import { Navigate, useRouteError } from 'react-router';

export interface Props {
    [key: string]: any
}

const ErrorPage = (props: Props) => {
    let error = useRouteError() as any;
    console.error(error);

    return (
        <></>
    );
}

export default ErrorPage;