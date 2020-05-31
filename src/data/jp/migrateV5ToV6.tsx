import CodeArea from "../../components/CodeArea"
import validationSchema from "../../components/codeExamples/validationSchema"
import * as React from "react"
import typographyStyles from "../../styles/typography.module.css"

export default (
  <>
    <p>こんにちは、 </p>
    <p>
      調整が必要な重大な変更を以下に示します。私たちは心から願っています
      これらの変更は、コードベースにあまり問題を引き起こしていません。もし、あんたが
      背後にあるいくつかの理論的根拠を不思議に思っています。これを見てください
      <a
        href="https://github.com/react-hook-form/react-hook-form/pull/1471"
        target="_blank"
        rel="noopener noreferrer"
      >
        pull request
      </a>{" "}
      詳細については。
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
          すべての構成の<code>validation</code>プレフィックスを削除します。
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
        <code>validationSchema</code>は標準のに置き換えられました
        <code>resolver</code>、Yup、Joi、Superstructを
        瞬間。より多くのスキーマをサポートする公式のリゾルバーライブラリがあります
        将来の検証。
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
        <code>watch</code>はフラットフォームの値を返さなくなり、代わりに
        デフォルトでは、ネストされたオブジェクトデータを返します。
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
        <code>getValues</code>はフラットフォームの値を返さなくなり、代わりに
        デフォルトでは、ネストされたオブジェクトデータを返します。
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
        メソッドの名前は<code>trigger</code>に変更されます。
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
        コンポーネントの名前は<code>FormProvider</code>に変更され、
        <code>FormContext.Consumer</code>も使用できます。
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
        名前をダーティから<code>isDirty</code>に変更します。
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
        データ型を<code>Set</code>から<code>Object</code>に変更する
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
