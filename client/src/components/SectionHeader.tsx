import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, className = "", light = false }: SectionHeaderProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-16 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 
          ${light ? 'text-white' : 'text-primary'}`}
        >
          {title}
        </h2>
        {subtitle && (
          <>
            <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full" />
            <p className={`text-lg md:text-xl leading-relaxed
              ${light ? 'text-white/80' : 'text-muted-foreground'}`}
            >
              {subtitle}
            </p>
          </>
        )}
      </motion.div>
    </div>
  );
}
