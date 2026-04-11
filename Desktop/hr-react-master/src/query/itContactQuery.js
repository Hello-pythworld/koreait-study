import { useMutation } from "@tanstack/react-query"
import { createContact } from "../api/itContactApi"

export const useCreateContact = () => {
    return useMutation({
        mutationFn: createContact
    });
};