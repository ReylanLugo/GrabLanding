"use client";
import React, {useEffect} from "react";
import useApi from "@/hooks/useApi";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {Button} from "@/components/commons/Button";
import {setNewPassword, setNewPasswordModal, setPage, setUsers, setUserSelected} from "@/store/features/admin";
import {DeleteUser, UpdateUser} from "@/actions";
import {Cookies} from "react-cookie";
import Modal from "@/components/commons/Modal";
import {setToast} from "@/store/features/toast";

export default function Page() {

    const admin = useAppSelector((state) => state.admin);
    const dispatch = useAppDispatch();
    const cookies = new Cookies();
    const {loading, error} = useApi(`/users?limit=10&page=${admin.page}`);

    useEffect(() => {
        if (error) {
            dispatch(setToast({message: error, type: "error"}));
            dispatch(setPage(1))
        }
    }, [error,dispatch, admin.page]);

    async function deleteUser(id: number) {
        const res = await DeleteUser(id, cookies.get('token'));
        if (res.success) {
            dispatch(setUsers(admin.users.filter((user: any) => user.id !== id)))
            dispatch(setToast({message: res.msg, type: "success"}));
        } else {
            dispatch(setToast({message: res.msg, type: "error"}));
        }
    }

    function prevPage() {
        dispatch(setPage(admin.page - 1))
    }

    function nextPage() {
        dispatch(setPage(admin.page + 1))
    }

    function openModal(id: number) {
        dispatch(setNewPasswordModal(true));
        dispatch(setUserSelected(id));
    }

    function closeModal() {
        dispatch(setNewPasswordModal(false));
        dispatch(setUserSelected(null));
    }

    async function newPassword() {

        if (admin.newPassword.length < 6) {
            dispatch(setToast({message: "Contraseña demasiado corta debe ser mayor a 6 caracteres", type: "error"}));
            return;
        }

        const res = await UpdateUser(admin.userSelected, {password: admin.newPassword}, cookies.get('token'));
        if (res.success) {
            dispatch(setNewPasswordModal(false));
            dispatch(setNewPassword(''));
            dispatch(setUserSelected(0));
            dispatch(setToast({message: res.msg, type: "success"}));
        } else {
            dispatch(setToast({message: res.msg, type: "error"}));
        }
    }

    function logout() {
        cookies.remove('token');
        window.location.reload();
    }

    return (<>
        <div className={"min-h-svh py-40 w-full flex flex-col items-center justify-center"}>
            <span className={"text-black font-extrabold text-2xl mb-5"}>
                <span className={"text-xs text-red-500 mr-10 cursor-pointer"} onClick={() => logout()}>Salir</span>
                Usuarios <span
                className={"text-xs"}>{admin.users.length}/10</span>
            <span className={"text-black font-extrabold text-xs mb-5"}> Pagina {admin.page}</span> </span>
            <table className={"border border-blue-400  rounded-lg mb-3"}>
                <thead>
                <tr className={"bg-blue-200"}>
                    <th className={"px-7 py-3"}>ID</th>
                    <th className={"px-7 py-3"}>Username</th>
                    <th className={"px-7 py-3"}>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    admin.users.map((user: any) => {
                        return <tr className={"border border-blue-400"} key={user.id}>
                            <td className={"px-7 py-3 border-r border-blue-400"}>{user.id}</td>
                            <td className={"px-7 py-3 border-r border-blue-400"}>{user.username}</td>
                            <td className={"px-7 py-3 flex gap-2"}>
                                <Button onClick={() => deleteUser(user.id)}
                                        className={"[&]:bg-red-500 [&]:text-xs"}>Delete</Button>
                                <Button onClick={() => openModal(user.id)} className={"[&]:text-xs"} type={"tertiary"}>New Password</Button>
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </table>
            <div className={
                "flex gap-6 mt-8"
            }>
                {admin.page > 1 && <Button onClick={prevPage} type={"tertiary"}>Anterior</Button>}
                {admin.users.length > 0 && <Button onClick={nextPage}>Siguiente</Button>}
            </div>
        </div>
        {admin.newPasswordModal && (
            <>
                <Modal onClose={closeModal}>
                    <h3>Nueva contraseña</h3>
                    <input className={"border border-blue-400 rounded-lg my-3 px-3 py-1 w-full"} value={admin.newPassword} type={"password"} onChange={(e) => dispatch(setNewPassword(e.target.value))} placeholder={"Nueva contraseña"}/>
                    <Button onClick={async () => await newPassword()} className={"w-full [&]:text-xs"}>Guardar</Button>
                </Modal>
            </>
        )}
    </>);
}