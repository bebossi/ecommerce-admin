"use client ";

import { useEffect, useState } from "react";
import { Modal } from "../ui/modal";
import { Button } from "../ui/button";

interface AlertModalProps {
  isOpen: boolean;
  onCLose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onCLose,
  loading,
  onConfirm,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Are you sure?"
      description="This action cannot be undone"
      isOpen={isOpen}
      onClose={onCLose}
    >
        <div className="pt-6 space-x-2 flex items-center justify-end w-full">
    <Button disabled={loading} variant="outline" onClick={onCLose}>
    Cancel
    </Button>
    <Button disabled={loading} variant="destructive" onClick={onConfirm}>
    Continue
    </Button>
        </div>
    </Modal>
  );
};
