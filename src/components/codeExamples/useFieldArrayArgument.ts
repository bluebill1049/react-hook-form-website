export default `function Test() {
  const { control, register } = useForm();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "test" // unique name for your Field Array
    }
  );

  return (
    <>
      {fields.map((field, index) => {
        return (
          <div key={field.id}> {/* important: using id from to track item added or removed */}
            <input name={\`test[\${index}}]\`} ref={register} />
          </div>
        );
      })}
    </>
  );
}

`
