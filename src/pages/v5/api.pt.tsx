import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ApiPage from "../../components/ApiPage"
import apiV5 from "../../data/pt/api-v5"
import api from "../../data/pt/api"

const ApiPT = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang={"pt"}>
    <Seo title={apiV5.title} location={location} />
    <ApiPage defaultLang="pt" api={api} />
  </Layout>
)

export default ApiPT
