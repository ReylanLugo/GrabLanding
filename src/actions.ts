"use server";
import axios from "axios";
import axiosInstance from "@/utils/axios";

export async function Login(credentials: { username: string, password: string }) {
    try {
        const apiUrl = process.env.API || "http://localhost:7000";
        const response = await axiosInstance.post(`${apiUrl}/auth/login`, credentials);
        const {token} = response.data;
        return {
            success: true,
            token: token,
            msg: "Login Successful"
        }
    } catch (error:any) {
        // TODO: Implement logging error
        console.log(error);
        return {
            success: false,
            msg: error?.response?.data.error || "Login Failed"
        }
    }
}

export async function Register(credentials: { username: string, password: string }) {
    try {
        const apiUrl = process.env.API || "http://localhost:7000";
        const response = await axiosInstance.post(`${apiUrl}/auth/register`, credentials);
        const {token} = response.data;
        return {
            success: true,
            token: token,
            msg: "Register Successful"
        }
    } catch (error:any) {
        // TODO: Implement logging error
        console.log(error.response.data.error);
        return {
            success: false,
            msg: error.response.data.error
        }
    }
}

export async function DeleteUser(id: number, jwt: string) {
    try {
        const apiUrl = process.env.API || "http://localhost:7000";
        const response = await axiosInstance.delete(`${apiUrl}/users/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwt}`,
            },
        });
        return {
            success: true,
            msg: "User Deleted"
        }
    } catch (error) {
        // TODO: Implement logging error
        console.log(error);
        return {
            success: false,
            msg: "User Not Deleted"
        }
    }
}

export async function UpdateUser(id: number, credentials: { username?: string, password?: string }, jwt: string) {

    try {
        const apiUrl = process.env.API || "http://localhost:7000";
        const response = await axiosInstance.put(`${apiUrl}/users/${id}`, credentials, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwt}`,
            },
        });
        return {
            success: true,
            msg: "User Updated"
        }
    } catch (error) {
        // TODO: Implement logging error
        console.log(error);
        return {
            success: false,
            msg: "User Not Updated"
        }
    }

}