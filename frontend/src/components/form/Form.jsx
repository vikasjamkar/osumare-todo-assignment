import React, { useState } from "react";
import InputField from "../inputs/InputFeild";
import RadioInput from "../inputs/RadioInput";
import CheckBoxInput from "../inputs/CheckBoxInput";

const LANGUAGES = ["English", "Hindi", "Tamil"];
const TermsCheckbox = ({ checked, onChange, error }) => (
  <div className="mb-3">
    <label className="custom-checkbox-label bg-white w-100">
      <input
        type="checkbox"
        name="termsAccepted"
        id="termsAccepted"
        onChange={onChange}
        checked={checked}
        className="mb-0"
      />
      I agree to the <a href="#" className="text-danger text-decoration-none">Terms and Conditions</a>
    </label>
    {error && <div className="text-danger mt-1">{error}</div>}
  </div>
);

const Form = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "Male",
    languages: [],
    email: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => {
      if (type === "checkbox") {
        if (name === "languages") {
          const updatedLanguages = checked
            ? [...prev.languages, value]
            : prev.languages.filter((lang) => lang !== value);
          return { ...prev, languages: updatedLanguages };
        }

        if (name === "termsAccepted") {
          return { ...prev, termsAccepted: checked };
        }
      }
      return { ...prev, [name]: value };
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.gender) newErrors.gender = "Please select your gender.";
    if (formData.languages.length === 0) newErrors.languages = "Select at least one language.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept the terms.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData); 
      setFormData({       
        firstName: "",
        lastName: "",
        gender: "Male",
        languages: [],
        email: "",
        termsAccepted: false,
      });
      setErrors({});
    }
  };
  return (
    <form onSubmit={handleSubmit} className="pb-5">
      <div className="row">
        <div className="col-md-6">
          <InputField
            label="First Name"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
        </div>

        <div className="col-md-6">
          <InputField
            label="Last Name"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
        </div>

        <div className="col-md-12">
          <RadioInput
            name="gender"
            options={["Male", "Female"]}
            selectedValue={formData.gender}
            onChange={handleChange}
            error={errors.gender}
          />
        </div>

        <div className="col-md-12">
          <CheckBoxInput
            name="languages"
            options={LANGUAGES}
            selectedValues={formData.languages}
            onChange={handleChange}
            error={errors.languages}
          />
        </div>

        <div className="col-md-12">
          <InputField
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
        </div>

        <div className="col-md-12">
          <TermsCheckbox
            checked={formData.termsAccepted}
            onChange={handleChange}
            error={errors.termsAccepted}
          />
        </div>

        <div className="col-md-12">
          <button type="submit" className="custom-btn w-100">
            Done
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
