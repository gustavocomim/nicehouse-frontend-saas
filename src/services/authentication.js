import { GET, POST } from './api'
import { ReadObject, SaveObject } from './storage'

export const DoRegister = async params => {
	return await POST(`/users`, params)
}

export const DoLogin = async params => { 
	const response = await POST(`/auth/local`, params) 
	if (response?.jwt) {
		await SaveObject('authentication', response)
	}
	return response
}

export const DoLoginGoogle = async (token) => { 
	const response = await GET(`/auth/bearer-google?access_token=${ token }`)
	if (response?.jwt) {
		await SaveObject('authentication', response)
	}
	return response
}


export const AuthGoogleFetchUser = async (token) => { 


try {
	const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
		method: 'GET',
		headers: { Authorization: `Bearer ${token}` },
	});

	if (!response.ok) {
		throw new Error('Failed to fetch user info');
	}

	const userInfo = await response.json();
	console.log('User Info:', userInfo);
	return userInfo;
	} catch (error) {
	console.error('Error fetching user info:', error);
	throw error;
	}
}


export const DoLogout = async () => {
	SaveObject('authentication', {})
	return true
} 
  
export const DoForgotPassword = async params => {
	return await POST(`/auth/forgot-password`, params)
}

export const DoResetPassword = async params => {
	return await POST(`/auth/reset-password`, params)
}

export const IsLogged = async () => {
	const authentication = ReadObject('authentication')
	return authentication?.jwt
}

export const ReadMe = async () => {
	return await GET(`/users/me`, true)
}  