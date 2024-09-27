import { createJurnal } from "@/app/actions/jurnal/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

// send message
export const useCreateJurnal = async () => {
    const queryClient = useQueryClient();

    const create = async (formData: FormData) => {
        Swal.fire({
            title: "Jurnal",
            text: "Sedang membuat jurnal...",
            icon: "info",
            showConfirmButton: false
        });

        return await createJurnal(formData);
    }

    return useMutation({
        mutationFn: (data: FormData) => create(data),
        onSettled: async (_, error) => {
            if (error) {
                console.log(`Error: ${error}`);
            } else {
                await queryClient.invalidateQueries({
                    queryKey: ["jurnal"],
                });
            }
        },
        onError: async (error: any) => {
            Swal.close()
            Swal.fire({
                title: "Gagal",
                text: "Gagal membuat jurnal",
                icon: "error"
            });
            return error;
        },
        onSuccess: async (res) => {
            Swal.close()
            // if (res) {
            //     if (res) {
            //         Swal.fire({
            //             title: 'Jurnal gagal dibuat',
            //             text: 'Pastikan data yang diinputkan telah sesuai',
            //             icon: 'error'
            //         })
            //     } else {
            //         Swal.fire({
            //             title: 'Jurnal gagal dibuat',
            //             text: 'Pastikan data yang diinputkan telah sesuai',
            //             icon: 'error'
            //         })
            //     }

            //     return res;
            // }
            Swal.fire({
                title: "Berhasil",
                text: "Jurnal berhasil dibuat!",
                icon: "success"
            })
        }
    })
}