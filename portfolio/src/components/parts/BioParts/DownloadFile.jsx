import axios from 'axios';

const downloadFile = async (filename) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/download/${1}`, {
            responseType: 'blob', // Important for handling binary data
        });

        // Create a URL for the file
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename); // Set the filename
        document.body.appendChild(link);
        link.click();

        // Clean up
        link.remove();
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error downloading the file:', error);
    }
};

export default downloadFile;
