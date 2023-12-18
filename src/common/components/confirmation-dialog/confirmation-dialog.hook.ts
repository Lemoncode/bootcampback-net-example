import React from 'react';
import { createEmptyLookup, Lookup } from '@/common/models';

export const useConfirmationDialog = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [itemToDelete, setItemToDelete] = React.useState(createEmptyLookup());

  const handleAccept = React.useCallback(() => {
    setItemToDelete(createEmptyLookup());
  }, []);

  const handleClose = React.useCallback(() => setIsOpen(false), []);

  const handleOpenDialog = React.useCallback((item?: Lookup) => {
    setIsOpen(true);
    setItemToDelete(item);
  }, []);

  return {
    isOpen,
    itemToDelete,
    onAccept: handleAccept,
    onClose: handleClose,
    onOpenDialog: handleOpenDialog,
  };
};
