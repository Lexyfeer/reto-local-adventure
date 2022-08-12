import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
    const [file, setFile] = useState(null);
    const handleChange = file => {
        setFile(file);
    };
    return (
        <div>
            <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
                label="Drag & dop a logo file or click to upload"
            />
        </div>

    );
}

export default DragDrop;