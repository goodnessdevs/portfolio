import { useState } from "react";

const useGetMessages = () => {
  type Message = {
    id: number;
    name: string;
    email: string;
    message: string;
  };

  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getMessages = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api`, {
        method: "GET",
      });

      const data = await response.json();
      // console.log("Fetched messages:", data);

      if (Array.isArray(data)) {
        setMessages(data);
      } else if (Array.isArray(data.theMessages)) {
        setMessages(data.theMessages);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err: any) {
      setError("Server error");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    getMessages,
    isLoading,
    error,
    messages,
    setMessages,
  };
};

export default useGetMessages;
