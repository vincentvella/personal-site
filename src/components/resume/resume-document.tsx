import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import useDrawer from '../../hooks/useDrawer';
import { Constants } from '../../common';
import { Paper } from '@material-ui/core';

const ResumeDocument = props => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const { width, path } = props;
  const { isDrawerOpen } = useDrawer();
  const onPageLoadSuccess = ({ numPages }) => setNumPages(numPages);
  const pageWidth = isDrawerOpen ? width - Constants.LayoutConstants.drawerWidth : width;
  return (
    <Paper style={{ margin: 5, width: pageWidth, alignSelf: 'center' }}>
      <Document file={path} onLoadSuccess={onPageLoadSuccess} onLoadError={console.error}>
        <Page width={pageWidth} pageNumber={pageNumber} />
      </Document>
    </Paper>
  );
};

export default ResumeDocument;
