import * as React from "react"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import Register from "../../../components/useForm/UnRegister"

export default ({ location }: { location: any }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="UseForm - Register" location={location} />
      <Register currentLanguage="en" />
    </Layout>
  )
}
