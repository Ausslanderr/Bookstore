import { createContext, useEffect, useState } from "react";
import axios from "axios"; // Import axios to make API calls

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize as null
  const [adminUser, setAdminUser] = useState(null);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userToken = localStorage.getItem("user_token");
        const response = await axios.get("http://localhost:8800/login"); // Check if the user is logged in on the server
        if (response.data.loggedIn && response.data.user[0].email) {
          setUser(response.data.user[0].email); // Set user if logged in
          
        }
        else if (response.data.loggedIn && response.data.user[0].Email){
          setUser(response.data.user[0].Email);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  const signin = async (email, Senha) => {
    try {
      const response = await axios.post("http://localhost:8800/login", {
        email: email,
        Senha: Senha,
      });

      if (response.data === "Login successful.") {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({email, token}));
        //setUser({email, Senha});
        setUser(email);
        return "Login successful.";
      } else if (response.data === "Admin Login successful") {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({email, token}));
        setAdminUser(email);
        return "Admin Login successful."
      }
      else {
        return response.data; // Return error messages
      }
      console.log(email);
    } catch (error) {
      console.error("Signin error:", error);
      return "Erro ao fazer login. Verifique suas credenciais.";
    }
    try{
      const response = await axios.post("http://localhost:8800/loginAdmin",{
        email:email,
        Senha:Senha,
      })
      if (response.data === "Admin Login successful"){
        const token = Math.random.toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({email, token}));
        setAdminUser(email);
        return "Login successful.";
      }else {
        
        return response.data; // Return error messages
      }
    }
    catch (error) {
      console.error("Signin error:", error);
      return "Erro ao fazer login. Verifique suas credenciais.";
    }
    console.log(email);
  };
  
  const signup = async (email, Senha) => {
    try {
      const response = await axios.post("http://localhost:8800/addUser", {
        email: email,
        Senha: Senha,
      });

      if (response.data === "Usuário criado com sucesso.") {
        setUser(email);
        return null;
      } else {
        return response.data; // Return error messages
      }
    } catch (error) {
      console.error("Signup error:", error);
      return "Erro ao criar usuário. Verifique os dados inseridos.";
    }
  };

  const signout = async () => {
    try {
      await axios.post("http://localhost:8800/logout"); // Clear session on the server
      setUser(null);
      setAdminUser(null);
    } catch (error) {
      console.error("Signout error:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, adminUser, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
