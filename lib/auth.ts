export async function authenticate(username: string, password: string) {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    return response.ok;
  } catch (error) {
    console.error('Authentication failed:', error);
    return false;
  }
}

export async function logout() {
  try {
    await fetch("/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    window.location.href = "/login";
  } catch (error) {
    console.error("Logout failed:", error);
  }
}