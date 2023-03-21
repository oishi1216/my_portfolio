import React from 'react';
import { forwardRef } from "react";

type Props = {
    id: string
}

export const Contact = forwardRef<HTMLDivElement, Props>(({ id } , ref) => {
    return(
        <div id={id} ref={ref} className='wrapper'>

        </div>
    )
});