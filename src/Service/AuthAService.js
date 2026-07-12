const BASE = `${import.meta.env.VITE_API_URL}/api/auth`;

export const login = async (email,password) => {
    const res = await fetch(`${BASE}/login`,{
        method :"POST",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify({email , password}),
    });

    if(!res.ok) throw new Error("Invalid credential")
        const {token} = await res.json();
    localStorage.setItem("token",token);
    return token;
}

export const register = async (email,password,username) => {

    const res = await fetch(`${BASE}/register`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({email,password,username}),
    });
    if(!res.ok) throw new Error ("Register failed")
};

export const getCurrentUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/me`,  {
        headers: { Authorization: `Bearer ${token}` }
    });

    if (!res.ok) return null;
    return await res.json(); // { username: "Nihal M" }
};

export const logout = () => localStorage.removeItem("token");

export const getToken = () => localStorage.getItem("token");