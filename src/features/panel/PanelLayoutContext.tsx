import React, { useContext, useEffect } from 'react';

export type PanelLayoutContextNavDisplayed = boolean;

export type PanelLayoutContextValue = {
  navDisplayed: PanelLayoutContextNavDisplayed;
  setNavDisplayed: React.Dispatch<
    React.SetStateAction<PanelLayoutContextNavDisplayed>
  >;
};

export const PanelLayoutContext =
  React.createContext<PanelLayoutContextValue | null>(null);

export const usePanelLayoutContext = () => {
  const ctx = useContext(PanelLayoutContext);
  if (ctx === null) {
    throw new Error('Missing parent <PanelLayout> component');
  }
  return ctx;
};

export const usePanelLayoutHideNav = (
  displayed: PanelLayoutContextNavDisplayed = true
) => {
  const { setNavDisplayed } = usePanelLayoutContext();

  useEffect(() => {
    setNavDisplayed(displayed);
    return () => setNavDisplayed(true);
  }, [setNavDisplayed, displayed]);
};
