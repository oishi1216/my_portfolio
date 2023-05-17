import { ReactNode } from "react";

export type ContainerProps = {
    id: string;
    isIntersecting: boolean;
}

export type ModalProps = {
    isVisible: boolean;
    onClose: () => void;
    children: ReactNode;
};