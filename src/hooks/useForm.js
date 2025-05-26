import { useState } from "react";

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    let { name, value, checked, files } = e.target;

    if (name == "status") {
      value = checked ? "active" : "inactive";
    }
    // if (name === "images" && files) {
    //   setForm((prev) => ({
    //     ...prev,
    //     [name]: Array.from(files), // store multiple files
    //   }));
    // }
    if (name == "productFile" && files) {
      setForm({
        ...form,
        [name]: files[0],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  return {
    form,
    setForm,
    handleOnChange,
  };
};

export default useForm;
