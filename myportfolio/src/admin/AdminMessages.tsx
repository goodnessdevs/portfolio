import { useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";

import useGetMessages from "./hooks/useGetMessages";
import useDelete from "./hooks/useDelete";

export default function AdminMessages() {
  const { getMessages, messages, setMessages } = useGetMessages();
  const { deleteMessage, isLoading: isDeleting } = useDelete();

  useEffect(() => {
    const handleMessages = async () => {
      await getMessages();
    };

    handleMessages();
  }, []);

  const handleDelete = async (id: number) => {
    const success = await deleteMessage(id);

    if (success) {
      setMessages((prev) => prev.filter((msg) => msg.id !== id));
      toast.success("Message deleted");
    } else {
      toast.error("Failed to delete message");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-5xl mx-auto"
    >
      <Card className="shadow-2xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Contact Messages</CardTitle>
        </CardHeader>

        <CardContent>
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4">
              {!messages ? (
                <p className="text-center text-muted-foreground py-10">
                  Loading messages...
                </p>
              ) : messages.length === 0 ? (
                <p className="text-center text-muted-foreground py-10">
                  No messages found.
                </p>
              ) : (
                messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="border flex justify-between items-center p-4 rounded-xl bg-muted/30 backdrop-blur-sm hover:shadow-md transition"
                  >
                    <div>
                      <p className="text-sm mb-2">{msg.message}</p>
                      <div className="text-sm text-muted-foreground">
                        From: {msg.name} ({msg.email})
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-2">
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => handleDelete(msg.id)}
                        disabled={isDeleting}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </motion.div>
  );
}
