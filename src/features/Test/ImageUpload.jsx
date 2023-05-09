import { Box, InputLabel } from "@mui/material";
import React, { useState } from "react";
import { PhotoCamera } from "@mui/icons-material";
import { Controller } from "react-hook-form";

const ImageUpload = ({ image, control }) => {
  const [imagePreview, setImagePreview] = useState(image);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <Box>
                    <Controller
              name="file"
              control={control}
              defaultValue=""
              render={({ field }) => (
      <input
        type="file"
        accept="image/*"
        id="image-input"
        style={{ display: "none" }}
        onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setImagePreview(reader.result);
              };
              reader.readAsDataURL(file);
            } else {
              setImagePreview(image);
            }
            field.onChange(e.target.files);
          }}
      />
      )}
      />
      <InputLabel htmlFor="image-input" sx={{ position: "relative", width: 1 }}>
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="uploaded preview"
            style={{
              cursor: "pointer",
              width: "100%",
              height: "300px",
              objectFit: "cover",
            }}
          />
        ) : (
          <Box
            sx={{
              cursor: "pointer",
              width: "100%",
              height: "300px",
              border: "1px solid black",
            }}
          >
            Click to upload image
          </Box>
        )}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
          }}
        >
          <PhotoCamera sx={{ color: "#fff" }} />
        </Box>
      </InputLabel>
    </Box>
  );
};

export default ImageUpload;
