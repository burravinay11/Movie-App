import { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../api/api.jsx'

const useAxiosFetch = (baseUrl) => {
    const [data, setData] = useState([])
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchData = async (url) => {
            try {
                setIsLoading(true);
                const response = await api.get(url);
                setData(response.data);
            } catch (err) {
                setFetchError(err.message)

            } finally {
                setTimeout(() => setIsLoading(false), 500)
            }
        }
        fetchData(baseUrl);
    }, [baseUrl])
    return ({ data, fetchError, isLoading });
}

export default useAxiosFetch;