import { Layout } from "@/components/Layout";
import { Coffee } from "lucide-react";

interface PlaceholderProps {
  title: string;
}

export const Placeholder = ({ title }: PlaceholderProps) => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <Coffee className="h-16 w-16 text-accent/20 mb-6 animate-pulse" />
        <h1 className="text-4xl font-serif font-bold text-primary mb-4">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-md">
          We're still brewing this page! Please check back later or continue
          exploring the rest of Prince's Den.
        </p>
      </div>
    </Layout>
  );
};
