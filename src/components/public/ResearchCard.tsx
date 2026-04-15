import Image from "next/image";
import type { ResearchArea } from "@/lib/types";

export default function ResearchCard({ area }: { area: ResearchArea }) {
  return (
    <div className="card-hover group overflow-hidden rounded-xl border-t-4 border-primary-orange bg-white shadow-sm hover:shadow-[0_12px_24px_rgba(75,168,181,0.15)]">
      {area.image_url && (
        <div className="relative aspect-video overflow-hidden">
          <Image src={area.image_url} alt={area.title} fill className="card-image object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-dark">{area.title}</h3>
        <div className="mt-3 flex items-start gap-2">
          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-orange" />
          <p className="text-dark/60">{area.description}</p>
        </div>
      </div>
    </div>
  );
}
