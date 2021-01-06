import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ApiPage from "../../components/V6/ApiPageV6"
import api from "../../data/V6/ru/api"

const Api = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="ru">
    <Seo title={api.title} location={location} />
    <ApiPage defaultLang="ru" api={api} />
  </Layout>
)

export default Api
