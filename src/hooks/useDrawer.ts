import React, { useEffect, useState } from 'react';
import { useTheme, useMediaQuery } from '@material-ui/core';

function useDrawer() {
  let isDrawerOpen = true;
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down('xs'));
  if (isXS) {
    isDrawerOpen = false;
  }
  return { isDrawerOpen };
}

export default useDrawer;
