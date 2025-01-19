import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const axiosSecure = useAxiosSecure()
    const { user, loading } = useAuth()

    const { data: role, isLoading } = useQuery({
        queryKey: ['role', user?.email],
        enabled: !!user && !loading,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/users/role/${user?.email}`)
            return data.role
        }
    })
    return [role, isLoading]
};

export default useRole;