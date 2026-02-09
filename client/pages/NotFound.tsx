import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <div className="relative mb-8">
          <Coffee className="h-24 w-24 text-primary/10" />
          <span className="absolute inset-0 flex items-center justify-center text-5xl font-serif font-bold text-primary">
            404
          </span>
        </div>
        <h1 className="text-4xl font-serif font-bold text-primary mb-4">
          Spilled Coffee!
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md">
          It looks like the page you're looking for has been moved or doesn't
          exist anymore. Let's get you back to the den.
        </p>
        <Button asChild size="lg" className="rounded-full px-10">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
