import { useState } from "react";

export const useDetailsModal = () => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const toggleDetailsModal = () => setShowDetailsModal(!showDetailsModal);
  return { showDetailsModal, toggleDetailsModal };
};
