import { Dispatch, ReactNode, SetStateAction } from "react";

export type ContainerProps = {
    id: string;
    isIntersecting: boolean;
}

export type WorksProps = {
    id: string;
    isIntersecting: boolean;
    openModals: Array<boolean>;
    setopenModals: Dispatch<SetStateAction<Array<boolean>>>;
}

export type ModalProps = {
    index: number;
    openModals: Array<boolean>;
    onClose: () => void;
    children: ReactNode;
};

export type CarouselProps = {
    modalImages: {
        id: string;
        image: string;
        alt: string;
    }[]
}