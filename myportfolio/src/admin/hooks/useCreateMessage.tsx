import { useState } from "react";

const useCreateMessage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const createMessage = async (name: string, email: string, message: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError(data.error || "Something went wrong.");
      }

    } catch (err: any) {
      setError("Server error");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createMessage,
    isLoading,
    error,
    name,
    email,
    message,
    setName,
    setEmail,
    setMessage,
  };
};

export default useCreateMessage;

