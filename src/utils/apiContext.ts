/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import i18next from "i18next";
import { useQuery } from "react-query";

export const useApi = () => {
  const header = fetchHeader();
  const footer = fetchFooter();

  const pages = fetchPages();

  return {
    header,
    footer,
    pages,
  };
};

const fetchHeader = () => {
  const en = useQuery(`header-en`, () => {
    return axios.get(`${import.meta.env.REACT_APP_API_URL}/globals/header`, {
      params: {
        locale: "en",
        depth: 25,
      },
    });
  });

  const ar = useQuery(`header-ar`, () => {
    return axios.get(`${import.meta.env.REACT_APP_API_URL}/globals/header`, {
      params: {
        locale: "ar",
        depth: 25,
      },
    });
  });

  i18next.addResource("en", "header", "data", en.data?.data.navItems);
  i18next.addResource("ar", "header", "data", ar.data?.data.navItems);

  const header = { en, ar };
  return header;
};

const fetchFooter = () => {
  const en = useQuery(`footer-en`, () => {
    return axios.get(`${import.meta.env.REACT_APP_API_URL}/globals/footer`, {
      params: {
        locale: "en",
        depth: 25,
      },
    });
  });

  const ar = useQuery(`footer-ar`, () => {
    return axios.get(`${import.meta.env.REACT_APP_API_URL}/globals/footer`, {
      params: {
        locale: "ar",
        depth: 25,
      },
    });
  });

  i18next.addResource("en", "footer", "data", en.data?.data);
  i18next.addResource("ar", "footer", "data", ar.data?.data);

  return { en, ar };
};


export const useCollection = (collection: string)=>{

  const en = useQuery(`${collection}-en`, () => {
    return axios.get(`${import.meta.env.REACT_APP_API_URL}/${collection}`, {
      params: {
        locale: "en",
        depth: 10,
      },
    });
  });

  const ar = useQuery(`${collection}-ar`, () => {
    return axios.get(`${import.meta.env.REACT_APP_API_URL}/${collection}`, {
      params: {
        locale: "ar",
        depth: 10,
      },
    });
  });



  i18next.addResource("en", collection, "data", en.data?.data.docs);
  i18next.addResource("ar", collection, "data", ar.data?.data.docs);
return {en,ar}
}
const fetchPages = () => {
  const en = useQuery(`pages-en`, () => {
    return axios.get(`${import.meta.env.REACT_APP_API_URL}/pages`, {
      params: {
        locale: "en",
        depth: 10,
      },
    });
  });

  const ar = useQuery(`pages-ar`, () => {
    return axios.get(`${import.meta.env.REACT_APP_API_URL}/pages`, {
      params: {
        locale: "ar",
        depth: 10,
      },
    });
  });

  i18next.addResource("en", "pages", "data", en.data?.data.docs);
  i18next.addResource("ar", "pages", "data", ar.data?.data.docs);

  return { en, ar };
};
