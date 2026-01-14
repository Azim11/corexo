import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import SectionLayout from "../components/section-layout";

export default function NotFound() {
  return (
    <SectionLayout className="min-h-[80vh] flex items-center justify-center bg-background">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* Large 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-[10rem] md:text-[14rem] font-black text-foreground/5 leading-none select-none">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-border shadow-xl">
            <span className="text-xl md:text-2xl font-bold text-foreground block">
              Page Not Found
            </span>
          </div>
        </div>

        <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-lg shadow-primary/20"
          >
            <Home size={18} className="mr-2" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-8 py-4 bg-white text-foreground border border-border rounded-xl font-bold hover:bg-secondary transition-all"
          >
            <ArrowLeft size={18} className="mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </SectionLayout>
  );
}
