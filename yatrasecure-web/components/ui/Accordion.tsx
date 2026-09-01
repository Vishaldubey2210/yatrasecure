'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export const Accordion: React.FC<{ items: AccordionItem[] }> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="border border-slate-800 rounded-xl bg-slate-900/50 overflow-hidden">
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-slate-200 hover:text-white"
            >
              <span>{item.title}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 \${isOpen ? 'rotate-180 text-primary-400' : 'text-slate-500'}`} />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-5 pb-4 text-sm text-slate-400"
                >
                  {item.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
