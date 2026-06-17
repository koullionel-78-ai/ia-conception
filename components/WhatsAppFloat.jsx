import { MessageCircle } from "lucide-react";
import { contact } from "@/data/content";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${contact.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-ink shadow-lg shadow-black/30 transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2} />
    </a>
  );
}
