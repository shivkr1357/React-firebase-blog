import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";

export default function FixedTags() {
  const [category, setCategory] = useState([]);
  const [newCategory, setNewCategory] = useState([]);
  const [value, setValue] = useState();

  const categoryCollectionRef = query(
    collection(db, "category"),
    orderBy("created", "desc")
  );

  const handleChange = (cat) => {
    console.log(cat);
  };
  useEffect(() => {
    const getAllCategory = async () => {
      const data = await getDocs(categoryCollectionRef);

      setCategory(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAllCategory();
  }, []);

  return (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      value={value}
      onChange={(event, newValue) => {
        setNewCategory([...newCategory, newValue]);
        setValue(newValue.name);
        handleChange(newValue);
      }}
      options={category}
      getOptionLabel={(option) => (option.name ? option.name : "")}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Categories"
          placeholder=" Select Category"
        />
      )}
    />
  );
}

{
  /* <img
        style={{
          // marginLeft: "150px",
          width: "50vw",
          height: "250px",
          borderRadius: "10px",
          objectFit: "cover",
        }}
        src={image === "" ? "" : URL.createObjectURL(image)}
        alt="image"
        loading="lazy"
      /> */
}
{
  /* <ImageListItemBar position="below" title="" /> */
}

{
  /* <Stack direction="row" spacing={1}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <label htmlFor="fileInput">
                <AddPhotoAlternate
                  fontSize="large"
                  sx={{
                    cursor: "pointer",
                  }}
                />
              </label>

              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                name="photo"
                onChange={handleImageUpload}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <label htmlFor="bold">
                <FormatBold
                  sx={{
                    cursor: "pointer",
                  }}
                  fontSize="large"
                />
              </label>
              <label>{image.name}</label>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}></Box>
          </Stack> */
}

{
  /* <FormControl sx={{ minWidth: 120, width: "100%" }}>
            <InputLabel id="demo-simple-select-helper-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={inputField.categories}
              label="Category"
              onChange={handleCategoryChange}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {categoriesArray &&
                categoriesArray.map((value, key) => {
                  return (
                    <MenuItem key={key} value={value}>
                      {value}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl> */
}
