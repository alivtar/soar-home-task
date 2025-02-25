import React, { type FC, useMemo, useState } from 'react';

import { Viewport } from '@/App/components';
// import { PanelNavBar } from "@/features/panel";
import {
  PanelLayoutContext,
  type PanelLayoutContextNavDisplayed,
  type PanelLayoutContextValue,
} from '@/features/panel/PanelLayoutContext';

export const PanelLayout: FC<
  React.PropsWithChildren<{
    navHidden?: boolean;
  }>
> = ({ navHidden = false, children }) => {
  const [navDisplayed, setNavDisplayed] =
    useState<PanelLayoutContextNavDisplayed>(!navHidden);

  const providerValue = useMemo(
    () =>
      ({
        navDisplayed,
        setNavDisplayed,
      }) satisfies PanelLayoutContextValue,
    [navDisplayed]
  );

  return (
    <PanelLayoutContext.Provider value={providerValue}>
      <Viewport>
        {/* {!!navDisplayed && <PanelNavBar display="block" />} */}
        <div className="flex-1 flex-col">{children}</div>
      </Viewport>
    </PanelLayoutContext.Provider>
  );
};
