
import * as SecureStore from 'expo-secure-store'

export default async function fetch_profile_data() {
  try {
    const token = await SecureStore.getItemAsync('accessToken');
    if (!token) {
      return;
    }
    const response = await fetch('http://192.168.1.150:8000/api/profile/', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      // Optionally handle non-OK responses here
      console.log(`response status: ${response.status}`)
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}