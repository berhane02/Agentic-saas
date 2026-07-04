"use client"

import { useIsMounted } from "@/hooks/use-is-mounted";
import { ProModal } from "./pro-modal";

export const ModalProvider = () => {
    const isMounted = useIsMounted();

    if(!isMounted){
        return null;
    }

    return (
        <>
        <ProModal/>
        </>
    )
}
