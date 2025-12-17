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
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
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
      toast.success("Message sent successfully ✨");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="mt-24 mb-20 md:mt-16 w-full"
    >
      <Card className="rounded-2xl max-w-5xl mx-auto bg-gradient-to-br from-chart-2/40 via-black/40 to-black/40 backdrop-blur-sm">
        <CardHeader className="text-center space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            Let’s build something
          </p>
          <CardTitle className="text-4xl text-muted font-bold flex items-center justify-center gap-2">
            <MessageCircle className="w-7 h-7" />
            <span>Contact Me</span>
          </CardTitle>
          <Separator className="w-16 mx-auto" />
          <p className="text-sm text-sidebar-ring max-w-xl mx-auto">
            Whether you have a project in mind, a question, or just want to say
            hello, feel free to reach out through any of the channels below.
          </p>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-6 text-base md:grid-cols-[1.1fr_1fr] md:gap-x-10">
          {/* Contact channels */}
          <div className="space-y-4 text-muted-foreground">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                Direct contact
              </p>

              <Badge
                variant="outline"
                className="flex items-center gap-3 p-3 w-full justify-start text-white"
              >
                <Phone size={18} />
                <span className="font-medium tracking-wider">
                  +234 816 544 9350
                </span>
              </Badge>

              <Badge
                variant="outline"
                className="flex items-center gap-3 p-3 w-full justify-start"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-green-500" />
                <a
                  href="https://wa.me/2348165449350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline tracking-wider text-white"
                >
                  Chat on WhatsApp
                </a>
              </Badge>

              <Badge
                variant="outline"
                className="flex items-center gap-3 p-3 w-full justify-start text-white"
              >
                <Mail size={18} />
                <a
                  href="mailto:devswithgoody82@gmail.com"
                  className="hover:underline tracking-wide"
                >
                  devswithgoody82@gmail.com
                </a>
              </Badge>
            </div>

            <Separator />

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                Location
              </p>
              <Badge
                variant="outline"
                className="flex items-center gap-3 p-3 w-full justify-start text-white"
              >
                <MapPin size={18} />
                <span>Lagos, Nigeria (remote friendly)</span>
              </Badge>
            </div>
          </div>

          {/* Drawer / message form */}
          <div className="flex items-center justify-center">
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  variant="default"
                  className="text-base animate-bounce duration-100 p-6 w-full rounded-full md:w-auto bg-chart-2/90 hover:bg-chart-2 transition font-medium"
                >
                  Send me a message
                </Button>
              </DrawerTrigger>

              <DrawerContent className="bg-gradient-to-br from-chart-2 via-black/95 to-black/90">
                <DrawerHeader className="space-y-1">
                  <DrawerTitle className="text-2xl font-semibold text-white">
                    Send me a message
                  </DrawerTitle>
                  <DrawerDescription className="text-white/70">
                    Share a bit about your idea, project, or question. Replies
                    typically within 24 hours.
                  </DrawerDescription>
                </DrawerHeader>

                <Card className="w-full max-w-md mx-auto my-4 border-none shadow-none">
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium">Name</label>
                        <Input
                          name="name"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-sm font-medium">Email</label>
                        <Input
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-sm font-medium">Message</label>
                        <Textarea
                          name="message"
                          placeholder="Tell me about your project, idea, or question..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={5}
                          required
                          className="resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? "Sending..." : "Send message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <DrawerFooter className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Your message goes straight to my inbox.
                  </span>
                  <DrawerClose asChild>
                    <Button variant="outline" className="w-fit">
                      Close
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </CardContent>

        <CardFooter className="text-center mt-4 text-sm text-muted-foreground">
          Thanks for taking the time to reach out.
        </CardFooter>
      </Card>
    </motion.section>
  );
}
