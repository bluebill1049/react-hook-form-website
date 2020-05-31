import CodeArea from "../../components/CodeArea"
import validationSchema from "../../components/codeExamples/validationSchema"
import * as React from "react"
import typographyStyles from "../../styles/typography.module.css"

export default (
  <>
    <p>Всем привет,</p>
    <p>
      Вот критические изменения, которые вам необходимо отрегулировать. Мы
      искренне надеемся эти изменения не создают особых проблем для вашего кода.
      если ты Вам интересны некоторые из причин, вы можете взглянуть на это {""}
      <a
        href="https://github.com/react-hook-form/react-hook-form/pull/1471"
        target="blank"
        rel="noopener noreferrer"
      >
        pull request
      </a>{" "}
      Больше подробностей.
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
          Мы удаляем префикс <code>validation</code> для всех настроек.
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
        <code>validationSchema</code> был заменен стандартным
        <code>resolver</code>, и вы можете использовать Yup, Joi и Superstruct
        на момент. У нас есть официальная библиотека преобразователей для
        поддержки большего количества схем проверка в будущем.
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
        <code>watch</code> больше не будет возвращать значения плоской формы,
        вместо этого вернет данные вложенного объекта по умолчанию.
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
        <code>getValues ​</code> больше не будет возвращать значения плоской
        формы, вместо этого он вернет данные вложенного объекта по умолчанию.
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
        имя метода переименовывается в <code>trigger</code>.
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
        имя компонента переименовывается в <code>FormProvider</code>, и теперь
        вы также можно использовать <code>FormContext.Consumer</code>.
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
        Изменение имени с грязного на <code>isDirty</code>.
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
        Изменение типа данных с <code>Set</code> на <code>Object</code>.
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
