'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function ZonaImagen({
  src,
  alt,
  pie,
  ancho = 1200,
  alto = 700
}: {
  src: string;
  alt: string;
  pie?: string;
  ancho?: number;
  alto?: number;
}) {
  const [zoom, setZoom] = useState(false);
  return (
    <>
      <figure className="my-6 rounded-2xl overflow-hidden bg-marca-carbon shadow-lg border-2 border-marca-amarillo">
        <button
          type="button"
          onClick={() => setZoom(true)}
          className="block w-full cursor-zoom-in"
          aria-label="Ampliar imagen"
        >
          <Image
            src={src}
            alt={alt}
            width={ancho}
            height={alto}
            className="w-full h-auto"
            unoptimized
          />
        </button>
        {pie && (
          <figcaption className="px-5 py-3 text-white text-sm font-semibold bg-marca-carbon">
            📌 {pie}
          </figcaption>
        )}
      </figure>

      <AnimatePresence>
        {zoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoom(false)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-5 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={src}
              alt={alt}
              className="max-w-full max-h-full rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
