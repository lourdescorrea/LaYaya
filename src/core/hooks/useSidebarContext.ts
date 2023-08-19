import { useContext } from 'react';
import { SidebarContext } from '../providers/SideBarProvider';

export function useSidebarContext() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('useSidebarContext must be use inside SidebarProvider');
  }

  return context;
}
