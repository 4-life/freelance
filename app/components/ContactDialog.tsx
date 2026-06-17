import { useState } from "react";
import { CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultMessage?: string;
}

export default function ContactDialog({ open, onOpenChange, defaultMessage = "" }: Props) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(defaultMessage);

  function handleOpenChange(value: boolean) {
    onOpenChange(value);
    if (!value) {
      setTimeout(() => {
        setSent(false);
        setName("");
        setEmail("");
        setMessage(defaultMessage);
      }, 300);
    }
  }

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        {sent ? (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <CheckCircle className="size-12 text-green-600" />
            <div className="space-y-1">
              <p className="font-semibold text-lg">Message received!</p>
              <p className="text-sm text-muted-foreground">
                Thanks, {name.split(" ")[0]}. I'll review your message and get
                back to you at <span className="text-foreground">{email}</span>{" "}
                within 1–2 business days.
              </p>
            </div>
            <Button variant="outline" onClick={() => handleOpenChange(false)}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Get in touch</DialogTitle>
              <DialogDescription>
                Tell me about your project and I'll get back to you within 1–2
                business days.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSend} className="space-y-4 mt-2">
              <div className="space-y-1.5">
                <Label htmlFor="contact-name">Name</Label>
                <Input
                  id="contact-name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Describe your project, timeline, and budget…"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Send message
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
