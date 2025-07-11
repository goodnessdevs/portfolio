import { useState } from "react";

const useDelete = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteMessage = async (id: number): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/delete/${id}`, {
        method: "DELETE",
      });

      console.log(`Deleting message with ID: ${id}`);

      if (!res.ok) throw new Error("Delete failed");

      return true;
    } catch (err) {
      setError("Server error");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    deleteMessage,
    isLoading,
    error,
  };
};

export default useDelete;
