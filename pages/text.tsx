import useImageUploader from "@/utils/useImageUploader";
import React from "react";

const UploadForm: React.FC = () => {
  const {
    files,
    uploadedUrls,
    error,
    handleFileChange,
    handleSubmit,
  } = useImageUploader();
  
  return (
    <div>
      <h2>Upload Images</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} multiple />
        <button type="submit">Upload</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {uploadedUrls && uploadedUrls.length > 0 && (
        <div>
          <h3>Uploaded URLs:</h3>
          {uploadedUrls.map((url, index) => (
            <div key={index}>
              <p>{url}</p>
              <img
                src={url}
                alt={`Uploaded ${index}`}
                style={{ maxWidth: "100%" }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadForm;
