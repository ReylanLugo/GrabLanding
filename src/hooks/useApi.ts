"use client";
import {useEffect, useState} from 'react';
import {Cookies} from 'react-cookie';
import axios from 'axios';
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {setUsers} from "@/store/features/admin";

const useApi = (url: string) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const admin = useAppSelector((state) => state.admin);
    const dispatch = useAppDispatch();
    const urlx = process.env.NEXT_PUBLIC_API_URL;
    const cookies = new Cookies();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(urlx + url, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `${cookies.get('token')}`,
                    },
                });
                dispatch(setUsers(response?.data));
            } catch (error: any) {
                console.log(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return {loading, error};
};

export default useApi;