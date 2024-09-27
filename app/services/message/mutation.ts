import { sendMessage } from "@/app/actions/message/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

// send message
export const useSendMessage = async () => {
    const queryClient = useQueryClient();

    const create = async (formData: FormData) => {
        Swal.fire({
            title: "Mengirim Pesan",
            text: "Sedang mengirim pesan...",
            icon: "info",
            showConfirmButton: false
        });

        return await sendMessage(formData);
    }

    return useMutation({
        mutationFn: (data: FormData) => create(data),
        onSettled: async (_, error) => {
            if (error) {
                console.log(`Error: ${error}`);
            } else {
                await queryClient.invalidateQueries({
                    queryKey: ["pesan"],
                });
            }
        },
        onError: async (error: any) => {
            Swal.close()
            Swal.fire({
                title: "Gagal",
                text: "Gagal mengirim pesan",
                icon: "error"
            });
            return error;
        },
        onSuccess: async (res) => {
            Swal.close()
            if (res) {
                if (res) {
                    Swal.fire({
                        title: 'Pesan gagal dikirim',
                        text: 'Pastikan data yang diinputkan telah sesuai',
                        icon: 'error'
                    })
                } else {
                    Swal.fire({
                        title: 'Pesan gagal dikirim',
                        text: 'Pastikan data yang diinputkan telah sesuai',
                        icon: 'error'
                    })
                }

                return res;
            }
            Swal.fire({
                title: "Berhasil",
                text: "Pesan berhasil terkirim!",
                icon: "success"
            })
        }
    })
}