import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { motion } from "framer-motion";
import useCreateMessage from "@/admin/hooks/useCreateMessage";

export default function Contact() {
  const {
    createMessage,
    name,
    email,
    message,
    setName,
    setEmail,
    setMessage,
    isLoading,
  } = useCreateMessage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createMessage(name, email, message);
      toast.success("Message has been sent");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: false }}
      className="mt-24 mb-20 md:mt-14 w-xl"
    >
      <Card className="shadow-xl border rounded-2xl">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-4xl font-bold text-primary">
            📬 Contact Me
          </CardTitle>
          <Separator className="w-16 mx-auto bg-primary" />
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-5 text-base md:grid-cols-2 md:gap-x-10">
          <div className="space-y-4 text-muted-foreground">
            <Badge
              variant="outline"
              className="flex items-center gap-3 p-3 w-full"
            >
              <Phone size={18} />
              <span className="font-medium tracking-wider">
                +234 816 544 9350
              </span>
            </Badge>

            <Badge
              variant="outline"
              className="flex items-center gap-3 p-3 w-full"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              <a
                href="http://wa.me/+2348165449350"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline tracking-wider"
              >
                +234 816 544 9350
              </a>
            </Badge>

            <Badge
              variant="outline"
              className="flex items-center gap-3 p-3 w-full"
            >
              <Mail size={18} />
              <a
                href="mailto:devswithgoody82@gmail.com"
                className="hover:underline tracking-wide"
              >
                devswithgoody82@gmail.com
              </a>
            </Badge>

            <Badge
              variant="outline"
              className="flex items-center gap-3 p-3 w-full"
            >
              <MapPin size={18} />
              <span>Lagos, Nigeria</span>
            </Badge>
          </div>

          <div className="flex items-center justify-center">
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  variant="default"
                  className="text-lg px-6 py-3 w-full md:w-auto bg-primary hover:bg-primary/90 transition rounded-xl"
                >
                  Send Me a Message
                </Button>
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className="text-2xl">
                    Send Me A Message
                  </DrawerTitle>
                  <DrawerDescription>
                    I'm open to collaborations, questions, or just a friendly
                    hello.
                  </DrawerDescription>
                </DrawerHeader>

                <Card className="w-full max-w-md mx-auto my-4">
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setName(e.target.value)
                        }
                        required
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setEmail(e.target.value)
                        }
                        required
                      />
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={message}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                          setMessage(e.target.value)
                        }
                        rows={5}
                        required
                        className="resize-none"
                      />
                      <Button type="submit" className="w-full">
                        {isLoading ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <DrawerFooter>
                  <DrawerClose>
                    <Button variant="outline" className="w-fit">
                      Cancel
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </CardContent>

        <CardFooter className="text-center mt-6 text-sm text-muted-foreground">
          Thanks for reaching out!
        </CardFooter>
      </Card>
    </motion.div>
  );
}
