import { motion, AnimatePresence } from "framer-motion";

type LoaderProps = {
  isLoading: boolean;
};

export const Loader = ({ isLoading }: LoaderProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f0f1a]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            layoutId="main-logo"
            src="/logo.png"
            alt="Logo"
            className="w-40 md:w-56"
            initial={{ scale: 3 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
