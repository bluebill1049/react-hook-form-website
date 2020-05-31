import CodeArea from "../../components/CodeArea"
import validationSchema from "../../components/codeExamples/validationSchema"
import * as React from "react"
import typographyStyles from "../../styles/typography.module.css"

export default (
  <>
    <p>Hola, </p>
    <p>
      Estos son los cambios importantes que necesitaría ajustar. Esperamos
      sinceramente esos cambios no están creando demasiados problemas para su
      base de código. Si tu se preguntan algunos de los fundamentos, puede echar
      un vistazo a este {""}
      <a
        href="https://github.com/react-hook-form/react-hook-form/pull/1471"
        target="_blank"
        rel="noopener noreferrer"
      >
        solicitud de extracción
      </a>{" "}
      para más detalles.
    </p>

    <p>
      ❤️ <i>React hook Form Team</i>
    </p>

    <hr />

    <main>
      <section>
        <code className={typographyStyles.codeHeading}>
          <h2>useForm: </h2>
        </code>

        <p>
          Estamos eliminando el prefijo <code>validation</code> para toda la
          configuración.
        </p>

        <CodeArea
          withOutCopy
          rawData={`const { register } = useForm({
  - validationResolver: undefined,
  + resolver: undefined,
  
  - validationContext: undefined,
  + context: undefined,
  
  - validationContext: undefined,
  + context: undefined,
  
  - validateCriteriaMode: "firstError",
  + criteriaMode: "firstError",
})`}
        />
      </section>

      <code className={typographyStyles.codeHeading}>
        <h2>validationSchema: </h2>
      </code>
      <p>
        <code>validationSchema</code> ha sido reemplazado por el estándar {""}
        <code>resolver</code>, y puede usar Yup, Joi y Superstruct en el
        momento. Tenemos una biblioteca oficial de resolución para soportar más
        esquemas validación en el futuro.
      </p>

      <code
        style={{
          fontSize: 16,
          padding: 15,
          background: "#191d3a",
          borderRadius: 4,
          display: "block",
        }}
      >
        npm install @hookform/resolvers
      </code>

      <CodeArea withOutCopy rawData={validationSchema} />

      <code className={typographyStyles.codeHeading}>
        <h2>watch: </h2>
      </code>

      <p>
        <code>watch</code> ya no devolverá valores de forma plana, sino que
        devolverá datos de objetos anidados por defecto.
      </p>

      <CodeArea
        withOutCopy
        rawData={`- watch({ nest: true });
+ watch();`}
      />

      <code className={typographyStyles.codeHeading}>
        <h2>getValues: </h2>
      </code>

      <p>
        <code>getValues</code> ya no devolverá valores de forma plana, en su
        lugar devolverá datos de objetos anidados por defecto.
      </p>

      <CodeArea
        withOutCopy
        rawData={`- getValues({ nest: true });
+ getValues();`}
      />

      <code className={typographyStyles.codeHeading}>
        <h2>triggerValidation: </h2>
      </code>

      <p>
        El nombre del método cambia de nombre a <code>trigger</code>.
      </p>

      <CodeArea
        withOutCopy
        rawData={`- triggerValidation();
+ trigger();
`}
      />

      <code className={typographyStyles.codeHeading}>
        <h2>FormContext: </h2>
      </code>

      <p>
        el nombre del componente cambia de nombre a <code>FormProvider</code>, y
        ahora usted puede usar <code>FormContext.Consumer</code> también.
      </p>

      <CodeArea
        withOutCopy
        rawData={`- <FormContext {...methods}>
+ <FormProvider {...methods}>`}
      />

      <code className={typographyStyles.codeHeading}>
        <h2>Dirty: </h2>
      </code>

      <p>
        Cambiando el nombre de sucio a <code>isDirty</code>`.
      </p>

      <CodeArea
        withOutCopy
        rawData={`- const { dirty } = formState;
+ const { isDirty } = formState;`}
      />

      <code className={typographyStyles.codeHeading}>
        <h2>dirtyFields: </h2>
      </code>

      <p>
        Cambiar el tipo de datos de <code>Set</code> a <code>Object</code>
      </p>

      <CodeArea
        withOutCopy
        rawData={`- const { dirtyFields } = formState;
- dirtyFields.has('test');
+ const { isDirty } = formState;
+ dirtyFields.test;`}
      />
    </main>
  </>
)
