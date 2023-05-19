import { Dispatch, ReactNode, SetStateAction } from "react";

export type ContainerProps = {
    id: string;
    isIntersecting: boolean;
}

export type WorksProps = {
    id: string;
    isIntersecting: boolean;
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export type ModalProps = {
    openModal: boolean;
    onClose: () => void;
    children: ReactNode;
};