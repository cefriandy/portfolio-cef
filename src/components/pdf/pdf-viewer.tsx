import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDFViewer: React.FC<{ fileUrl: string }> = ({ fileUrl }) => {
    return (
        <Worker workerUrl="/src/components/pdf/pdf.worker.js">
            <div style={{ height: '750px' }}>
                <Viewer fileUrl={fileUrl} />
            </div>
        </Worker>
    );
};

export default PDFViewer;