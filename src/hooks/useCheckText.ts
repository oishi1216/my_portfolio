import { useState } from "react";

export const useCheckText = () => {
    const checkText = (array: Array<boolean>, value:string, itemName: string) => {
        const newArray = [...array];

        const reg = itemName === 'name' ? new RegExp(/[!"#$%&'()\*\+\-\.,\/:;<=>?@\[\\\]^_`{|}~]/g) : new RegExp(/^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/);
        const checkName = reg.test(value);
        newArray[0] = value !== '' ? true : false;

        if(itemName === 'name') {
            newArray[1] = checkName ? false : true;
        } else {
            newArray[1] = checkName ? true : false;
        }

        return newArray;
    }

    return { checkText }
}