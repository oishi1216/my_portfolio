import { type } from "os";
import { Dispatch, ReactNode, SetStateAction } from "react";

export type  HeaderProps = {
    currentTab: string,
    isIntersecting: boolean;
    isDesktop: boolean;
}

export type ContainerProps = {
    id: string;
    isIntersecting: boolean;
    isDesktop: boolean;
}

export type WorksProps = {
    id: string;
    isIntersecting: boolean;
    isDesktop: boolean;
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
    carouselItems: {
        id: string;
        image: string;
        alt: string;
    }[]
}