import React, { useState } from "react";
import axios, { AxiosError } from "axios";

interface UploadResponse {
    urls: string[];
}

interface UploadOptions {
    maxFiles?: number;
    maxSize?: number;
}

const useImageUploader = (options: UploadOptions = {}) => {
    const [files, setFiles] = useState<FileList | null>(null);
    const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (selectedFiles) {
            setFiles(selectedFiles);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(files?.length)
        if (!files || files.length === 0) {
            setError("Please select files");
            return;
        }

        if (files.length > 4) {
            setError("You can only upload up to 4 images at a time.");
            return;
        }

        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append("images", files[i]);
        }

        try {
            const response = await axios.post<{ urls: string[] }>(
                "https://greenhillsacademy.rw:8081/upload",
                formData
            );

            if (response.status === 200) {
                setUploadedUrls(response.data.urls);
                setError(null); // Clear any previous errors
            } else {
                setError("Failed to upload images");
            }
        } catch (error) {
            if (
                axios.isAxiosError(error) &&
                error.response &&
                error.response.status === 400
            ) {
                setError(error.response.data);
            } else {
                setError("An unexpected error occurred");
            }
        }
    };

    return {
        files,
        uploadedUrls,
        error,
        handleFileChange,
        handleSubmit,
    };
};

export default useImageUploader;
