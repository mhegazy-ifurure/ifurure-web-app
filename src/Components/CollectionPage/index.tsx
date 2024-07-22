/* eslint-disable @typescript-eslint/ban-ts-comment */
import {  useNavigate, useParams } from "react-router-dom"
import Page from "../Page"
import { useTranslation } from "react-i18next"
import { Blog, Post, Project, Service } from "../../utils/payload-types"

const CollectionPage = () => {

    const {collection , collectionSlug}  =useParams()
  const { t } = useTranslation(collection);

  const navigate  =   useNavigate()


    
  
  const collectionsData :(Service[]| Post[]|Blog[]|Project[]) = t("data", { returnObjects: true });
  const collectioToRender = collectionsData.find(obj=>obj.slug==collectionSlug)
  if(!collectioToRender){
    navigate('/')
  }



  return (
    <>
    <Page page={collectioToRender}/>
    
    </>
  )
}

export default CollectionPage