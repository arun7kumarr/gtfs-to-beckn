import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface File {
  id: string;
  name: string;
}

const FileViewer: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get<File[]>('/api/gtfs');
        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <h1>GTFS Files</h1>
      {files.map(file => (
        <div key={file.id}>{file.name}</div>
      ))}
    </div>
  );
}

export default FileViewer;
