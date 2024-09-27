import {
    register,
    sendMessage,
    createJurnal,
    createComment,
    destroyJurnal,
    destroyMessage
} from "@/app/actions/user/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

// register user
export const useRegisterUser = async () => {
    const queryClient = useQueryClient();

    const create = async (formData: FormData) => {
        Swal.fire({
            title: "Register",
            text: "Memproses register...",
            icon: "info",
            showConfirmButton: false
        });

        return await register(formData);
    }

    return useMutation({
        mutationFn: (data: FormData) => create(data),
        onSettled: async (_, error) => {
            if (error) {
                console.log(`Error: ${error}`);
            } else {
                await queryClient.invalidateQueries({
                    queryKey: ["register"],
                });
            }
        },
        onError: async (error: any) => {
            Swal.close()
            Swal.fire({
                title: "Gagal",
                text: "Gagal melakukan register",
                icon: "error"
            });
            return error;
        },
        onSuccess: async (res) => {
            Swal.close()
            if (res) {
                if (res) {
                    Swal.fire({
                        title: 'Gagal',
                        text: 'Pastikan data yang diinputkan telah sesuai',
                        icon: 'error'
                    })
                } else {
                    Swal.fire({
                        title: 'Gagal',
                        text: 'Pastikan data yang diinputkan telah sesuai',
                        icon: 'error'
                    })
                }

                return res;
            }
            Swal.fire({
                title: "Register berhasil",
                text: "Berhasil melakukan registrasi!",
                icon: "success"
            })
        }
    })
}

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
                    queryKey: ["message"],
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
                        title: 'Gagal',
                        text: 'Pastikan data yang diinputkan telah sesuai',
                        icon: 'error'
                    })
                } else {
                    Swal.fire({
                        title: 'Gagal',
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