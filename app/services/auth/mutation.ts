import { authenticate } from "@/app/actions/auth/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

// register user
export const useSignInUser = async () => {
    const queryClient = useQueryClient();

    const create = async (formData: FormData) => {
        Swal.fire({
            title: "Autentikasi",
            text: "Memproses login...",
            icon: "info",
            showConfirmButton: false
        });

        return await authenticate(formData);
    }

    return useMutation({
        mutationFn: (data: FormData) => create(data),
        onSettled: async (_, error) => {
            if (error) {
                console.log(`Error: ${error}`);
            } else {
                await queryClient.invalidateQueries({
                    queryKey: ["authenticate"],
                });
            }
        },
        onError: async (error: any) => {
            Swal.close()
            Swal.fire({
                title: "Gagal",
                text: "Gagal melakukan autentikasi",
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
                title: "Login berhasil",
                text: "Sekarang anda akan redirect ke halaman dashboard!",
                icon: "success"
            })
        }
    })
}