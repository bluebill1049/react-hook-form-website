export default `import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, setValue, setError } = useForm();
  const onSubmit = data => console.log(data);

  useEffect(() => {
    register("firstName", { required: true });
    register("lastName");
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="firstName"
        onChange={e => setValue("firstName", e.target.value)}
      />
      <input
        name="lastName"
        onChange={e => {
          const value = e.target.value;
          if (value === "test") {
            setError("lastName", "notMatch")
          } else {
            setValue("lastName", e.target.value)
          }
        }}
      />
      <button>Submit</button>
    </form>
  );
}
`
