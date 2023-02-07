import React, { useState, useEffect } from "react";

const styles = {
    ht: {
        height: 'calc(100vh - 65px)',
        border: 0
    }
}

const PDFViewer = ({ filePath }) => {
    const [pdfUrl, setPdfUrl] = useState(null);

    useEffect(() => {
        setPdfUrl(filePath);
    }, [filePath]);

    return (
        <div style={styles.ht}>
            {pdfUrl ? (
                <iframe src={pdfUrl} width="100%" style={styles.ht} title="display resume"/>
            ) : (
                "Loading..."
            )}
        </div>
    );
};

export default PDFViewer;
