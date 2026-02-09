import { Layout } from "@/components/Layout";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <Mail className="h-16 w-16 text-accent/20 mb-6" />
        <h1 className="text-4xl font-serif font-bold text-primary mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-muted-foreground max-w-md">
          Email:{" "}
          <a
            href="mailto:psingh80436@gmail.com"
            className="text-primary underline underline-offset-4"
          >
            psingh80436@gmail.com
          </a>
        </p>
      </div>
    </Layout>
  );
}
