import * as SecureStore from 'expo-secure-store';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';

export function useHandleLogout() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await SecureStore.deleteItemAsync('accessToken');
            await SecureStore.deleteItemAsync('refreshToken');

            router.replace('/(auth)/logIn');

            Alert.alert('You have been logout.');
        } catch (error) {
            console.error('Error logging out:', error);
            Alert.alert('Error', 'Failed to log out.');
        }
    };

    return handleLogout;
}